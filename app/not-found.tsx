import Link from "next/link";
import { Container, Grid, GridCol, Title, Text, Button } from "@mantine/core";
import { Nav, SVG } from "_components";

export const metadata = {
	title: "Not Found",
};

export default function NotFound() {
	return (
		<>
			<Nav />
			<Container>
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
