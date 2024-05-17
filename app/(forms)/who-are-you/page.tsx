import { Title, Text } from "@mantine/core";
import { HubSpotForm } from "_components";

const Page = () => {
	return (
		<>
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
