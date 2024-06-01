import type { Metadata } from "next";
import { HubSpotForm } from "_components";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "Who Are You",
	description: "Give us your info",
};

const Page = async () => (
	<Suspense>
		<HubSpotForm />
	</Suspense>
);

export default Page;
