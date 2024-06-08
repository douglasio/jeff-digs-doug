import React from "react";
import Link from "next/link";
import { Image } from "@mantine/core";
import { PageHeader } from "_components";
import { SITE_PAGES } from "_util";

const Venue = () => {
	return (
		<div>
			<PageHeader
				image="static/images/willowdale_fall.webp"
				title={
					<>
						The
						<br />
						Venue
					</>
				}
			/>
			<p>
				Visit the <Link href="/about">About</Link> page.
			</p>
		</div>
	);
};

export default Venue;
