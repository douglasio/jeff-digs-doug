import React from "react";
import { Grid, Space } from "@mantine/core";
import { Nav } from "_components";
import { mobileNavBreakpoint } from "_util";

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
				gutter={{ base: "0", sm: "xl" }} // don't change the gutter base width or you'll get horizontal scrolling
				m={{
					base: "0 auto",
					[mobileNavBreakpoint]: "var(--mobile-nav-height) auto",
				}}
				w={{ base: "auto", sm: "90%" }}
				overflow="visible"
			>
				{children}
			</Grid>
			<Space h="xl" />
		</>
	);
}
