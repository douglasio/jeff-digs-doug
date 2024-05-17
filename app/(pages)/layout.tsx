import {
	ColorSchemeScript,
	Grid,
	GridCol,
	Image,
	MantineProvider,
	Title,
	Text,
	Flex,
	Overlay,
} from "@mantine/core";
import { Nav } from "_components";
import { COLORS, resolver, theme } from "_styles";
// import classes from "./layout.module.css";
import { WEDDING_DETAILS } from "_util";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Grid
			// className={classes.layoutGrid}
			gutter={{ base: 0, md: "xl" }}
			m={{ base: "0", sm: "xl" }}
		>
			<GridCol
				span={{ base: 12, sm: 3, md: 2 }}
				pos={{ base: "absolute", sm: "static" }}
				top="0"
				left="0"
				visibleFrom="sm"
			>
				<Flex
					justify={"flex-start"}
					align="flex-end"
					direction={{ base: "row", md: "column" }}
					ta="right"
					gap="lg"
				>
					<Image
						alt="D&J"
						src={"static/images/initials_Vertical_1.png"}
						fit="contain"
						w="200px"
						mb="xl"
						mr="-md"
					/>
					<Title order={1} maw="200">
						Wedding of Doug Odell <br />
						&amp; Jeff Chen
					</Title>
					<Text component="div" fs="italic">
						<p>{WEDDING_DETAILS.DATE}</p>
						<p>
							{WEDDING_DETAILS.VENUE}
							<br />
							{WEDDING_DETAILS.CITY}
						</p>
					</Text>
				</Flex>
			</GridCol>
			<GridCol span={{ base: 12, sm: 6, md: 8 }}>{children}</GridCol>
			<GridCol visibleFrom="sm" span={{ base: 12, sm: 3, md: 2 }}>
				<Nav />
			</GridCol>
		</Grid>
	);
}
