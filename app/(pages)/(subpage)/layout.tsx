import React from "react";
import { Container } from "@mantine/core";
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
			{/* grid must be wrapped in a container or it's a horizontal scrolling nightmare */}
			<Container
				fluid
				my={{
					base: "var(--mobile-nav-height)",
					[mobileNavBreakpoint]:
						"calc(var(--mobile-nav-height) * 1.5)",
				}}
				maw={1700}
				pb="lg"
			>
				{children}
			</Container>
		</>
	);
}
