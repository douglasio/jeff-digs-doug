import React from "react";
import { Grid } from "@mantine/core";
import { Nav } from "_components";

export default function SubpageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Nav variant="top" showLogo={true} />
			<Grid
				id="page-grid"
				className={"page-grid"}
				gutter={{ base: "sm", sm: "xl" }}
				m="auto"
				w={{ base: "auto", sm: "80%" }}
				overflow="visible"
			>
				{children}
			</Grid>
		</>
	);
}
