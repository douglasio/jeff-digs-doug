"use client";

import { useState } from "react";
import axios from "axios";
import { useDisclosure } from "@mantine/hooks";
import { TextInput, Button, Modal, Autocomplete, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconAt, IconMoodSad } from "@tabler/icons-react";
import { HUBSPOT, stateNames } from "_util";

const FORM_VALIDATIONS = {
	REQUIRED: (value: string) => (value.length < 1 ? "Required" : null),
	MIN_LENGTH: (value: string) => (value.length < 2 ? "Too short" : null),
	EMAIL_ADDRESS: (value: string) =>
		/^\S+@\S+$/.test(value) ? null : "Invalid email",
	STATE: (value: string) =>
		!stateNames.includes(value) ? "Pick a state from the list" : null,
};

export const HubSpotForm = () => {
	// eslint-disable-next-line no-unused-vars
	const [status, setStatus] = useState<
		"idle" | "submitting" | "submitted" | "error"
	>("idle");

	const [openedModal, handlers] = useDisclosure(false, {
		onClose: () => setStatus("idle"),
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
			state: "CA",
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
		setStatus("submitting");

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

		const response = await axios
			.post(
				`${HUBSPOT.SUBMIT_ENDPOINT}${portalId}/${formGuid}`,
				{
					portalId,
					formGuid,
					fields: mappedValues,
					context: {
						pageUri: "http://localhost",
						pageName: "Local",
					},
				},
				config,
			)
			.then(() => {
				//success
				setStatus("submitted");
			})
			.catch((error) => {
				//error
				setStatus("error");
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

	return (
		<>
			<form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
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
						required
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
			<Modal
				opened={openedModal}
				withCloseButton={false}
				onClose={handlers.close} // also resets form status
			>
				<p>
					<IconMoodSad style={{ verticalAlign: "text-top" }} /> It
					didn&rsquo;t work.
				</p>
				<Button onClick={handlers.close}>Try again</Button>
			</Modal>
		</>
	);
};

// export const HubSpotForm = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://js.hsforms.net/forms/v2.js";
//     document.body.appendChild(script);

//     script.addEventListener("load", () => {
//       // @ts-expect-error (it's an external dependency, just go with it)
//       if (window.hbspt) {
//         // @ts-expect-error
//         window.hbspt.forms.create({
//           portalId: "2847769",
//           formId: "be0cfe31-d5e9-478e-815a-0173308fffa2",
//           target: "#hubspotForm",
//         });
//       }
//     });
//   }, []);

//   return (
//     <div id="hubspotForm" className={`hubspotForm ${styles.hubspotForm}`}></div>
//   );
// };
