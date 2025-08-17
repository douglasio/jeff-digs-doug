import React, { Suspense } from "react";
import { IntroText, LoginForm } from "_components";
import { Container, Title } from "@mantine/core";
import { FONTS } from "_styles";

export const metadata = {
	title: "Login",
};

const Login = () => {
	return (
		<Container mt="lg" w={{ base: "auto", sm: "50%" }}>
			<Title className={FONTS.MRS_EAVES.className} order={1}>
				Hold it right there!
			</Title>
			<IntroText>
				Enter the password that was provided with your invitation.
			</IntroText>
			<Suspense>
				<LoginForm />
			</Suspense>
		</Container>
	);
};

export default Login;
