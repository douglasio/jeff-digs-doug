import React from "react";
import Link from "next/link";
import { Image } from "@mantine/core";

const Venue = () => {
	return (
		<div>
			<h1>Venue</h1>
			<p>Hello World! This is the Venue page</p>
			<Image
				src="/images/center_leaves.jpg"
				alt=""
				height="auto"
				width="500"
			/>
			<p>
				Visit the <Link href="/about">About</Link> page.
			</p>
		</div>
	);
};

export default Venue;
