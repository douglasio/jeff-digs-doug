import "@mantine/core/styles.layer.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { COLORS, theme } from "_styles";
import "./_styles/global.css";
import classes from "./layout.module.css";

export const metadata = {
	title: "Jeff Digs Doug",
	description: "A wedding website for the greatest couple of all time",
};

export const viewport = {
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
			<body className={classes.body}>
				<MantineProvider forceColorScheme="dark" theme={theme}>
					{children}
				</MantineProvider>
			</body>
		</html>
	);
}
