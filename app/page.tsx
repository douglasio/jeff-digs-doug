import { PATHS } from "_util";
import { redirect } from "next/navigation";

//Homepage
const Page = () => {
	redirect(PATHS.PAGES.WHO_ARE_YOU);
	// return <div>Go away, we&rsquo;re not ready yet.</div>;
};

export default Page;
