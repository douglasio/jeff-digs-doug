import Link from "next/link";

const Page = () => {
	return (
		<div>
			<h1>Home</h1>
			<p>Hello World! This is the Home page</p>
			<p>
				Visit the <Link href="/about">About</Link> page.
			</p>
			<p>
				Visit the <Link href="/venue">About</Link> page.
			</p>
		</div>
	);
};

export default Page;
