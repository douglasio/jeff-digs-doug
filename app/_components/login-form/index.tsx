"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { login } from "./actions";

//https://www.youtube.com/watch?v=Otq0LY90Qso
//https://github.com/cosdensolutions/code/blob/master/videos/long/auth-flow-next-js/

type LoginFormProps = {};

export const LoginForm = ({}: LoginFormProps) => {
	const [state, loginAction] = useActionState(login, undefined);

	// eslint-disable-next-line no-console
	state?.properties?.password?.errors && console.log("password error", state.properties.password.errors);

	return (
		<form action={loginAction}>
			<input type="password" name="password" placeholder="Password" />
			<SubmitButton />
			{state?.properties?.password?.errors && <p>{state?.properties?.password?.errors}</p>}
		</form>
	);
};

function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<button name="login" disabled={pending} type="submit">
			Login
		</button>
	);
}
