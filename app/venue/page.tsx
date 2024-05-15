import Link from "next/link";

const Venue = () => {
	return (
		<div>
			<h1>Venue</h1>
			<p>Hello World! This is the Venue page</p>
			<p>
				Visit the <Link href="/about">About</Link> page.
			</p>
		</div>
	);
};

export default Venue;
