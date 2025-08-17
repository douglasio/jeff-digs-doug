import Link from "next/link";
import { Container, Grid, GridCol, Title, Text, Button } from "@mantine/core";
import { Nav, SVG } from "_components";
import { mobileNavBreakpoint } from "_util";

export const metadata = {
	title: "Not Found",
};

export default function NotFound() {
	return (
		<>
			<Nav />
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
				<Grid align="center">
					<GridCol span={6}>
						<SVG.Initials variant="leaves" />
					</GridCol>
					<GridCol span={6}>
						<Title order={1}>Oh, no, that&rsquo;s not&mdash;</Title>
						<Text mt="sm" mb="sm">
							<Link
								href="https://www.tiktok.com/@pop_cltr/video/7326575851657612576?lang=en"
								target="_blank"
							>
								In the sense that...
							</Link>
						</Text>
						<Button component={Link} href="/">
							...Go home
						</Button>
					</GridCol>
				</Grid>
			</Container>
		</>
	);
}
