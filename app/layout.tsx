import "@mantine/core/styles.layer.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { COLORS, theme } from "_styles";
import { WEDDING_DETAILS } from "_util";
import "_styles/global.css";
import classes from "./layout.module.css";

export const metadata = {
	title: {
		template: "%s | Doug & Jeff's Wedding",
		default: "Doug & Jeff's Wedding",
	},
	description: `Doug and Jeff are getting married on ${WEDDING_DETAILS.DATE} at ${WEDDING_DETAILS.VENUE} in ${WEDDING_DETAILS.CITY}`,
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
		<html lang="en" suppressHydrationWarning>
			<head>
				<ColorSchemeScript />
				<link
					rel="icon"
					href="/favicon.ico"
					type="image/x-icon"
					sizes="any"
				/>
				<link rel="/static/images/engagement_hands_ring.jpg" />
				<meta name="robots" content="noindex,nofollow" />
				{/* Facebook */}
				<meta
					property="og:url"
					content="https://www.jeffdigsdoug.com"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content={metadata.title.default} />
				<meta
					property="og:description"
					content={metadata.description}
				/>
				<meta
					property="og:image"
					content="/static/images/engagement_hands_ring.jpg"
				/>

				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta
					property="og:image:alt"
					content="Engagement photo of Doug and Jeff holding hands with Jeff's ring near the beach"
				/>
				{/* Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="jeffdigsdoug.com" />
				<meta
					property="twitter:url"
					content="https://www.jeffdigsdoug.com"
				/>
				<meta name="twitter:title" content={metadata.title.default} />
				<meta
					name="twitter:description"
					content={metadata.description}
				/>
				<meta
					name="twitter:image"
					content="/static/images/engagement_hands_ring.jpg"
				/>
			</head>
			<body className={classes.body}>
				<MantineProvider forceColorScheme="dark" theme={theme}>
					{children}
				</MantineProvider>
			</body>
		</html>
	);
}
