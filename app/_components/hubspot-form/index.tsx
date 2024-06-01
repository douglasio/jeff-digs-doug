"use client";

import { usePathname, useSearchParams } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDisclosure, useLocalStorage } from "@mantine/hooks";
import {
	TextInput,
	Button,
	Modal,
	Autocomplete,
	Stack,
	Title,
	Text,
	Center,
	Loader as MantineLoader,
	Transition,
	Container,
	rem,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconAt, IconMoodSad } from "@tabler/icons-react";
import { Jumbo, Loader } from "_components";
import { FORM_STATES, HUBSPOT, stateNames } from "_util";

const FORM_VALIDATIONS = {
	REQUIRED: (value: string) => (value.length < 1 ? "Required" : null),
	MIN_LENGTH: (value: string) => (value.length < 2 ? "Too short" : null),
	EMAIL_ADDRESS: (value: string) =>
		/^\S+@\S+$/.test(value) ? null : "Invalid email",
	STATE: (value: string) =>
		!stateNames.includes(value) ? "Pick a state from the list" : null,
};

type FormStateType = FORM_STATES;

export const HubSpotForm = () => {
	const searchParams = useSearchParams();
	// const qsStatus = searchParams.get("status") as FormStateType;
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

	const form = useForm({
		mode: "uncontrolled",
		validateInputOnBlur: true,
		initialValues: {
			//// BLANK
			// firstname: "",
			// lastname: "",
			// email: "",
			// address: "",
			// city: "",
			// state: "",
			// zip: "",
			//// TESTING
			firstname: "Doug",
			lastname: "Odell",
			email: "jeffdigsdoug@gmail.com",
			address: "123 Fake Street",
			city: "San Diego",
			state: "California",
			zip: "92104",
		},

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
				setStatus(FORM_STATES.ERROR);
				handlers.open();
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

	console.log("form status: ", status);

	useEffect(() => {
		completed && setStatus(FORM_STATES.SUBMITTED);
	});

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
							You are not invited to the wedding of{" "}
							<span className="text-no-wrap">
								Doug &amp; Jeff
							</span>
						</Title>
						<Text mt="sm" mb={{ base: "lg", sm: "md" }} fs="italic">
							(But you could be if you fill out this form)
						</Text>
						<form
							onSubmit={form.onSubmit((values) =>
								handleSubmit(values),
							)}
						>
							<Stack>
								<TextInput
									label="First Name"
									placeholder="First Name"
									key={form.key("firstname")}
									{...form.getInputProps("firstname")}
								/>
								<TextInput
									label="Last Name"
									placeholder="Last Name"
									key={form.key("lastname")}
									{...form.getInputProps("lastname")}
								/>
								<TextInput
									label="Email"
									placeholder="your@email.com"
									leftSection={<IconAt />}
									key={form.key("email")}
									{...form.getInputProps("email")}
								/>
								<TextInput
									label="Street Address"
									placeholder="Street Address"
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
									data={stateNames}
									placeholder="State"
									key={form.key("state")}
									{...form.getInputProps("state")}
								/>
								<TextInput
									label="ZIP Code"
									placeholder="90210"
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
					<MantineLoader size="xl" />
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
					</Container>
				)}
			</Transition>
		</>
	);

	//
};
