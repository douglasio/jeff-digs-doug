import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { Button, Input, InputWrapper, Stack } from "@mantine/core";
import { IconLock } from "@tabler/icons-react";
import { PATHS } from "_util";

const FORM_VALIDATIONS = {
	REQUIRED: (value: string) => (value.length < 1 ? "Required" : null),
};

export default async function SignIn() {
	const session = await getServerSession(authOptions);
	const cookieStore = cookies();

	if (session) {
		redirect(`${PATHS.PAGES.HOME}`);
	}

	const csrfTokenCookie = `${
		process.env.NODE_ENV == "production" ? "__Host-" : ""
	}next-auth.csrf-token`;
	const csrfToken = cookieStore.get(csrfTokenCookie)?.value.split("|")[0];

	return (
		<form method="post" action={PATHS.API.AUTH_CREDENTIALS}>
			<Input name="csrfToken" type="hidden" defaultValue={csrfToken} />
			<Stack>
				<InputWrapper label="Password">
					<Input
						leftSection={<IconLock />}
						name="password"
						type="password"
						required
					/>
				</InputWrapper>
				<Button type="submit">Sign In</Button>
			</Stack>
		</form>
	);
}
