// special thanks (photo credit, people we worked with, friends, etc.)

import React from "react";
import { type Metadata } from "next";
import { GridCol } from "@mantine/core";

export const metadata: Metadata = {
	title: "Thanks",
	description: "You are welcome.",
};

const Thanks = () => {
	return (
		<>
			<GridCol span={{ base: 12, md: 5 }}>Thanks!</GridCol>
		</>
	);
};

export default Thanks;
