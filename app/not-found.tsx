import Link from "next/link";
import {
	Container,
	Grid,
	GridCol,
	Title,
	Text,
	Button,
	SimpleGrid,
	Box,
} from "@mantine/core";
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
					base: "calc(var(--mobile-nav-height) * 1.5)",
					sm: "calc(var(--mobile-nav-height) * 2)",
				}}
				maw={1100}
				pb="lg"
			>
				<SimpleGrid cols={{ base: 0, sm: 2 }}>
					<SVG.Initials variant="leaves" />

					<Box>
						<Title order={1}>
							Oh, no, that&rsquo;s{" "}
							<span className="text-no-wrap">not&mdash;</span>
						</Title>
						<Text mt="sm" mb="sm">
							<Link
								href="https://www.tiktok.com/@pop_cltr/video/7326575851657612576?lang=en"
								target="_blank"
							>
								In the sense that...
							</Link>
						</Text>
						<Button component={Link} href="/">
							Go home
						</Button>
					</Box>
				</SimpleGrid>
			</Container>
		</>
	);
}
