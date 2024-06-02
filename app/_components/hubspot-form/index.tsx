"use client";

import { usePathname } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDisclosure, useLocalStorage } from "@mantine/hooks";
import {
	TextInput,
	Button,
	Autocomplete,
	Stack,
	Title,
	Text,
	Center,
	Loader as MantineLoader,
	Transition,
	Container,
	Modal,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Jumbo, Loader } from "_components";
import { FORM_STATES, HUBSPOT, stateNames } from "_util";

const FORM_VALIDATIONS = {
	REQUIRED: (value: string) =>
		!value || value?.length < 1 ? "Required" : null,
	MIN_LENGTH: (value: string) => (value?.length < 2 ? "Too short" : null),
	EMAIL_ADDRESS: (value: string) =>
		/^\S+@\S+$/.test(value)
			? null
			: "Please enter a real email (with an @)",
	STATE: (value: string) =>
		!stateNames.includes(value) ? "Pick a state from the list" : null,
};

type FormStateType = FORM_STATES;

export const HubSpotForm = () => {
	// eslint-disable-next-line no-unused-vars
	const [status, setStatus] = useState<FormStateType>(FORM_STATES.LOADING);
	const [completed, setCompleted] = useLocalStorage({
		key: "whoAreYouCompleted",
		defaultValue: false,
	});
	const pathname = usePathname();
	const [openedModal, handlers] = useDisclosure(false, {
		onClose: () => setStatus(FORM_STATES.IDLE),
	});

	const initialValues =
		process.env.NODE_ENV === "development"
			? {
					firstname: "Joe",
					// lastname: "Tests",
					// email: "test@gmail.com",
					// address: "123 Fake Street",
					// city: "Los Angeles",
					// state: "California",
					// zip: "92104",
				}
			: {
					firstname: "",
					lastname: "",
					email: "",
					address: "",
					city: "",
					state: "",
					zip: "",
				};

	const form = useForm({
		mode: "uncontrolled",
		validateInputOnBlur: true,
		initialValues: initialValues,
		validate: {
			firstname: FORM_VALIDATIONS.REQUIRED,
			lastname: FORM_VALIDATIONS.REQUIRED,
			email: FORM_VALIDATIONS.EMAIL_ADDRESS,
			address: FORM_VALIDATIONS.REQUIRED,
			city: FORM_VALIDATIONS.REQUIRED,
			state: FORM_VALIDATIONS.STATE,
			zip: FORM_VALIDATIONS.REQUIRED,
		},
	});

	const handleSubmit = async (values: typeof form.values) => {
		setStatus(FORM_STATES.SUBMITTING);

		const portalId = HUBSPOT.PORTAL_ID;
		const formGuid = HUBSPOT.FORM_ID.INTAKE_FORM;
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const mappedValues = Object.entries(values).map((value) => {
			return {
				name: value[0],
				value: value[1],
			};
		});

		// uses json-server in development mode
		const endpoint =
			process.env.NODE_ENV === "development"
				? `${HUBSPOT.SUBMIT_ENDPOINT}${portalId}`
				: `${HUBSPOT.SUBMIT_ENDPOINT}${portalId}/${formGuid}`;

		const response = await axios
			.post(
				endpoint,
				{
					portalId,
					formGuid,
					fields: mappedValues,
					context: {
						pageUri: pathname,
						pageName: document.title,
					},
				},
				config,
			)
			.then(() => {
				//success
				setTimeout(() => {
					setStatus(FORM_STATES.SUBMITTED);
					setCompleted(true);
				}, 2500);
			})
			.catch((error) => {
				//error
				handlers.open();
				setStatus(FORM_STATES.ERROR);
				//https://axios-http.com/docs/handling_errors
				if (error.response) {
					// eslint-disable-next-line no-console
					console.error(
						"Form submit error!",
						error.response.data,
						error.response.status,
						error.response.headers,
					);
				} else if (error.request) {
					// eslint-disable-next-line no-console
					console.error(error.request);
				} else {
					// eslint-disable-next-line no-console
					console.error("Error", error.message);
				}
			});

		return response;
	};

	process.env.NODE_ENV === "development" && console.log(status);

	const handleResubmit = () => {
		setCompleted(false);
	};

	useEffect(() => {
		completed && setStatus(FORM_STATES.SUBMITTED);
	}, [completed]);

	return (
		<>
			{!completed && (
				<Loader
					type="timeout"
					onComplete={() => setStatus(FORM_STATES.IDLE)}
				/>
			)}
			<Transition mounted={status === FORM_STATES.IDLE}>
				{(styles) => (
					<Container style={styles}>
						<Title order={1}>
							You are not yet invited to the wedding of{" "}
							<span className="text-no-wrap">
								Doug &amp; Jeff
							</span>
						</Title>
						<Text
							size="lg"
							mt="sm"
							mb={{ base: "lg", sm: "md" }}
							fs="italic"
						>
							But you might be if you fill out this form
						</Text>
						<form
							onSubmit={form.onSubmit((values) =>
								handleSubmit(values),
							)}
						>
							<Stack>
								<TextInput
									label="First name"
									placeholder="First name"
									key={form.key("firstname")}
									{...form.getInputProps("firstname")}
								/>
								<TextInput
									label="Last name"
									placeholder="Last name"
									key={form.key("lastname")}
									{...form.getInputProps("lastname")}
								/>
								<TextInput
									label="Email"
									placeholder="your@email.com"
									key={form.key("email")}
									{...form.getInputProps("email")}
								/>
								<TextInput
									label="Street address"
									placeholder="1 Placeholder Street"
									key={form.key("address")}
									{...form.getInputProps("address")}
								/>
								<TextInput
									label="City"
									placeholder="City"
									key={form.key("city")}
									{...form.getInputProps("city")}
								/>
								<Autocomplete
									label="State"
									placeholder="State"
									data={stateNames}
									key={form.key("state")}
									{...form.getInputProps("state")}
								/>
								<TextInput
									label="ZIP code"
									placeholder="00000"
									key={form.key("zip")}
									{...form.getInputProps("zip")}
								/>
								<Button type="submit" mt="sm">
									Submit
								</Button>
							</Stack>
						</form>
					</Container>
				)}
			</Transition>
			{status === FORM_STATES.SUBMITTING && (
				<Center>
					<MantineLoader size="xl" mt="lg" />
				</Center>
			)}
			<Transition
				mounted={status === FORM_STATES.SUBMITTED}
				transition="fade"
				duration={400}
				timingFunction="ease"
			>
				{(styles) => (
					<Container
						style={styles}
						h={"100%"}
						ta={{ base: "center", sm: "left" }}
					>
						<Jumbo size="md">Thanks!</Jumbo>
						<Text fs="italic" ml="sm" size="lg">
							We&rsquo;ll get back you.
						</Text>
						<Button
							onClick={handleResubmit}
							mt="lg"
							ml="sm"
							size="xs"
							variant="outline"
						>
							Actually, I need to submit it again
						</Button>
					</Container>
				)}
			</Transition>
			<Modal
				opened={openedModal}
				withCloseButton={false}
				onClose={handlers.close} // also resets form status
			>
				<Text fs="italic" mb="xs">
					It didn&rsquo;t work...
				</Text>
				<Button onClick={handlers.close}>Try again</Button>
			</Modal>
		</>
	);

	//
};
