import type { Metadata } from "next";
import { HubSpotForm } from "_components";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { PATHS } from "_util";

export const metadata: Metadata = {
	title: "Who Are You",
	description: "Give us your info",
};

const Page = async () => redirect(PATHS.PAGES.HOME);
// <Suspense>
// 	<HubSpotForm />
// </Suspense>

export default Page;
