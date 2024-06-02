"use client";

import { usePathname } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useDisclosure, useLocalStorage } from "@mantine/hooks";
import {
	TextInput,
	Button,
	Autocomplete,
	Stack,
	Title,
	Text,
	Loader as MantineLoader,
	Transition,
	Container,
	Modal,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Jumbo, Loader } from "_components";
import { HUBSPOT, stateNames } from "_util";

const portalId = HUBSPOT.PORTAL_ID;
const formGuid = HUBSPOT.FORM_ID.INTAKE_FORM;
// uses json-server in development mode
const endpoint =
	process.env.NODE_ENV === "development"
		? `${HUBSPOT.SUBMIT_ENDPOINT}${HUBSPOT.PORTAL_ID}`
		: `${HUBSPOT.SUBMIT_ENDPOINT}${HUBSPOT.PORTAL_ID}/${HUBSPOT.FORM_ID.INTAKE_FORM}`;

const initialValues =
	process.env.NODE_ENV === "development"
		? {
				firstname: "Joe",
				lastname: "Tests",
				email: "test@gmail.com",
				address: "123 Fake Street",
				city: "Los Angeles",
				state: "California",
				zip: "92104",
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

const FORM_VALIDATIONS = {
	REQUIRED: (value: string) =>
		!value || value?.length < 1 ? "Required" : null,
	MIN_LENGTH: (value: string) => (value?.length < 2 ? "Too short" : null),
	EMAIL_ADDRESS: (value: string) =>
		/^\S+@\S+$/.test(value) ? null : "Enter a real email, with an @ symbol",
	STATE: (value: string) =>
		!stateNames.includes(value) ? "Pick a state from the list" : null,
};

type HubspotFieldType = {
	name: string;
	value: string;
};

async function submitForm(values: HubspotFieldType[], pathname: string) {
	const [response] = await Promise.allSettled([
		axios.post(
			endpoint,
			{
				portalId,
				formGuid,
				fields: values,
				context: {
					pageUri: pathname,
					pageName: document.title,
				},
				timeout: 3000,
			},
			{
				headers: {
					"Content-Type": "application/json",
				},
			},
		),
		new Promise((resolve) => setTimeout(resolve, 2000)),
	]);

	if (response.status === "rejected") {
		// eslint-disable-next-line no-console
		console.log(response);
		throw new Error("Submit Error");
	}

	return response;
}

export const HubSpotForm = () => {
	// eslint-disable-next-line no-unused-vars
	const [completed, setCompleted] = useLocalStorage({
		key: "whoAreYouCompleted",
		defaultValue: false,
	});
	const pathname = usePathname();
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
	const { mutate, isPending, isSuccess, reset } = useMutation({
		mutationFn: (values: HubspotFieldType[]) =>
			submitForm(values, pathname),
		onSuccess: () => {
			setCompleted(true);
		},
		onError: (error) => {
			handlers.open();
			// eslint-disable-next-line no-console
			console.error(error);
		},
	});

	const [openedModal, handlers] = useDisclosure(false, {
		onClose: reset,
	});

	const handleSubmit = (values: typeof form.values) => {
		const mappedValues = Object.entries(values).map((value) => {
			return {
				name: value[0],
				value: value[1],
			};
		});
		mutate(mappedValues);
	};

	const handleResubmit = () => {
		reset();
		setCompleted(false);
	};

	return (
		<>
			{!completed && <Loader type="timeout" />}
			{!completed && (
				<Transition mounted={!isSuccess}>
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
										placeholder="gordy@petsmart.com"
										key={form.key("email")}
										{...form.getInputProps("email")}
									/>
									<TextInput
										label="Street address"
										placeholder="123 Street St"
										key={form.key("address")}
										{...form.getInputProps("address")}
									/>
									<TextInput
										label="City"
										placeholder="San Diego"
										key={form.key("city")}
										{...form.getInputProps("city")}
									/>
									<Autocomplete
										label="State"
										placeholder="California"
										data={stateNames}
										key={form.key("state")}
										{...form.getInputProps("state")}
									/>
									<TextInput
										label="ZIP code"
										placeholder="92104"
										key={form.key("zip")}
										{...form.getInputProps("zip")}
									/>
									<Button
										type="submit"
										mt="sm"
										disabled={isPending}
									>
										{!isPending ? (
											"Submit"
										) : (
											<MantineLoader size="sm" />
										)}
									</Button>
								</Stack>
							</form>
						</Container>
					)}
				</Transition>
			)}
			<Transition
				mounted={isSuccess || completed}
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
