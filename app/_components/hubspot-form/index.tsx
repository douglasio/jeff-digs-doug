"use client";

import { useState } from "react";
import axios from "axios";
import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { HUBSPOT } from "_util";

type IntakeFormType = (
	firstname: string,
	lastname: string,
	email: string,
	address: string,
	city: string,
	state: string,
) => void;

const FORM_VALIDATIONS = {
	REQUIRED: (value: string) => (value.length < 1 ? "Required" : null),
	MIN_LENGTH: (value: string) => (value.length < 2 ? "Too short" : null),
	EMAIL_ADDRESS: (value: string) =>
		/^\S+@\S+$/.test(value) ? null : "Invalid email",
};

const submit_hubspot_form: IntakeFormType = async (
	firstname,
	lastname,
	email,
	address,
	city,
	state,
) => {
	const portalId = HUBSPOT.PORTAL_ID;
	const formGuid = HUBSPOT.FORM_ID.INTAKE_FORM;
	const config = {
		// important!
		headers: {
			"Content-Type": "application/json",
		},
	};

	const response = await axios.post(
		`${HUBSPOT.SUBMIT_ENDPOINT}${portalId}/${formGuid}`,
		{
			portalId,
			formGuid,
			fields: [
				{
					name: "firstname",
					value: "",
				},
				{
					name: "lastname",
					value: "",
				},
				{
					name: "email",
					value: "",
				},
				{
					name: "address",
					value: "",
				},
				{
					name: "city",
					value: "",
				},
				{
					name: "state",
					value: "",
				},
			],
			context: {
				pageUri: "http://localhost",
				pageName: "Local",
			},
		},
		config,
	);
	return response;
};

export const HubSpotForm = () => {
	const form = useForm({
		mode: "uncontrolled",
		validateInputOnBlur: true,
		initialValues: {
			firstname: "",
			lastname: "",
			email: "",
			address: "",
			city: "",
			state: "",
		},

		validate: {
			firstname: FORM_VALIDATIONS.REQUIRED,
			lastname: FORM_VALIDATIONS.REQUIRED,
			email: FORM_VALIDATIONS.EMAIL_ADDRESS,
			address: FORM_VALIDATIONS.REQUIRED,
			city: FORM_VALIDATIONS.REQUIRED,
			state: FORM_VALIDATIONS.REQUIRED,
		},
	});

	//   const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
	//     e.preventDefault(); // prevent form submit default behavior
	//     if (!firstName || !email) return; // if an input field is empty, don't submit the form
	//     const hubspot_response = await submit_hubspot_form(
	//       firstName,
	//       lastName,
	//       email,
	//       address,
	//       city,
	//       state,
	//     );
	//     console.log(hubspot_response); // make sure it succeeded!
	//   };

	return (
		<Box maw={340} mx="auto">
			<form onSubmit={form.onSubmit((values) => console.log(values))}>
				<TextInput
					withAsterisk
					label="First Name"
					placeholder="First Name"
					key={form.key("firstname")}
					{...form.getInputProps("firstname")}
				/>
				<TextInput
					withAsterisk
					label="Last Name"
					placeholder="Last Name"
					key={form.key("lastname")}
					{...form.getInputProps("lastname")}
				/>
				<TextInput
					withAsterisk
					label="Email"
					placeholder="your@email.com"
					key={form.key("email")}
					{...form.getInputProps("email")}
				/>
				<TextInput
					withAsterisk
					label="Street Address"
					placeholder="Street Address"
					key={form.key("address")}
					{...form.getInputProps("address")}
				/>
				<TextInput
					withAsterisk
					label="City"
					placeholder="City"
					key={form.key("city")}
					{...form.getInputProps("city")}
				/>
				<TextInput
					withAsterisk
					label="State"
					placeholder="State"
					key={form.key("state")}
					{...form.getInputProps("state")}
				/>
				<Button type="submit" mt="sm">
					Submit
				</Button>
			</form>
			<p>{HUBSPOT.FORM_ID.INTAKE_FORM}</p>
		</Box>
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
