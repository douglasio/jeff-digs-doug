import { PATHS } from "_util";
import { redirect } from "next/navigation";

//Homepage
const Page = () => {
	return redirect(PATHS.PAGES.HOME);
};

export default Page;
