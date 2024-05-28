import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Title, Text } from "@mantine/core";
import { HubSpotForm, Loader } from "_components";
import { PATHS } from "_util";

const Page = async () => {
	const session = await getServerSession(authOptions);

	if (!session) {
		redirect(
			`${PATHS.PAGES.SIGN_IN}?callbackUrl=${PATHS.PAGES.WHO_ARE_YOU}`,
		);
	}

	return (
		<>
			<Loader type="timeout" />
			<Title order={1} w={{ base: "auto", sm: "60%" }}>
				You are not invited to the wedding of{" "}
				<span className="text-no-wrap">Doug &amp; Jeff</span>
			</Title>
			<Text mb="xl">(But you could be if you fill out this form)</Text>
			<HubSpotForm />
		</>
	);
};

export default Page;
