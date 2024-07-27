import React from "react";
import { Nav } from "_components";
import { Image } from "@mantine/core";

const Venue = () => {
	return (
		<div>
			<Nav />
			<Image
				alt="Willowdale front of house in the fall, photo credit: Mark Spooner"
				src={"static/images/willowdale_fall.webp"}
				fit="cover"
				mah="50vh"
				className="image-overlay"
			/>
		</div>
	);
};

export default Venue;
