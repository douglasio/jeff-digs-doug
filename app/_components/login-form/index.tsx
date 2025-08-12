"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";
import { login } from "./actions";
import { Button, PasswordInput, Stack } from "@mantine/core";

//https://www.youtube.com/watch?v=Otq0LY90Qso
//https://github.com/cosdensolutions/code/blob/master/videos/long/auth-flow-next-js/

type LoginFormProps = {};

export const LoginForm = ({}: LoginFormProps) => {
	const [state, loginAction] = useActionState(login, undefined);
	const searchParams = useSearchParams();

	const route = searchParams.get("from");

	return (
		<form action={loginAction}>
			<Stack>
				<PasswordInput
					label="Password"
					type="password"
					name="password"
					size="sm"
				/>
				<input name="route" type="hidden" value={route ?? ""} />
				<SubmitButton />
				{state?.properties?.password?.errors && (
					<p>{state?.properties?.password?.errors}</p>
				)}
			</Stack>
		</form>
	);
};

function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<Button name="login" disabled={pending} type="submit">
			Login
		</Button>
	);
}
