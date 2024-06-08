import { Grid, GridCol, Image, Title, Text, Flex, rem } from "@mantine/core";
import { Nav, SVG } from "_components";
import { WEDDING_DETAILS } from "_util";
import classes from "./layout.module.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Grid
			className={classes.grid}
			gutter={{ base: 0, md: "xl" }}
			component={"main"}
		>
			<GridCol
				span={{ base: 12, sm: 3, md: 3 }}
				visibleFrom="sm"
				component={"header"}
				pos="relative"
				mt="xl"
			>
				<Flex
					justify={"flex-start"}
					align="flex-end"
					direction={{ base: "row", md: "column" }}
					ta="right"
					gap={"sm"}
				>
					<SVG.Initials
						variant="vertical"
						color="green"
						fit="contain"
						w="200px"
						mr="-xl"
						mb="xs"
					/>
					<Title order={1} maw="200" className={classes.siteTitle}>
						Wedding of Doug Odell <br />
						&amp; Jeff Chen
					</Title>
					<Text fs="italic">{WEDDING_DETAILS.DATE}</Text>
					<Text fs="italic">
						{WEDDING_DETAILS.VENUE}
						<br />
						{WEDDING_DETAILS.CITY}
					</Text>
				</Flex>

				<Image
					pos="absolute"
					src="static/images/corner_leaves.png"
					left="0"
					bottom="0"
				/>
			</GridCol>
			<GridCol span={{ base: 12, sm: 6, md: 7 }}>{children}</GridCol>
			<GridCol
				visibleFrom="sm"
				span={{ base: 12, sm: 3, md: 2 }}
				mt="xl"
				component="nav"
			>
				<Nav />
			</GridCol>
		</Grid>
	);
}
