import "@mantine/core/styles.layer.css";
import {
	ColorSchemeScript,
	Grid,
	GridCol,
	Image,
	MantineProvider,
	Title,
} from "@mantine/core";
import { Nav } from "_components";
import { COLORS, resolver, theme } from "_styles";
import classes from "./layout.module.css";
import { WEDDING_DETAILS } from "_util";

export const metadata = {
	title: "Jeff Digs Doug",
	description: "A wedding website for the greatest couple of all time",
	themeColor: COLORS.BLUE[9],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<ColorSchemeScript />
			</head>

			<MantineProvider
				cssVariablesResolver={resolver}
				forceColorScheme="dark"
				theme={theme}
			>
				<body className={classes.body}>
					<Grid m="xl">
						<GridCol span={3}>
							<Image
								alt="D&J"
								src={"static/images/initials_Vertical_1.png"}
								h="200"
								w="auto"
								mb="xl"
							/>
							<Title order={1}>
								The Wedding of Jeff Chen and Doug Odell
							</Title>
							<p>{WEDDING_DETAILS.DATE}</p>
							<p>
								{WEDDING_DETAILS.VENUE}
								<br />
								{WEDDING_DETAILS.CITY}
							</p>
						</GridCol>
						<GridCol span={6}>{children}</GridCol>
						<GridCol span={3}>
							<Nav />
						</GridCol>
					</Grid>
				</body>
			</MantineProvider>
		</html>
	);
}
