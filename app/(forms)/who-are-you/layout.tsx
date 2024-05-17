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
	Center,
	LoadingOverlay,
	rem,
} from "@mantine/core";
import { useDisclosure, useLocalStorage, useTimeout } from "@mantine/hooks";
import { Loader } from "_components";
// import classes from "./layout.module.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Loader type="timeout" />
			<Center m={{ base: "xl", sm: "xl" }} mt={{ base: "lg" }}>
				<Grid gutter={{ base: "md", sm: "xl" }}>
					<GridCol
						span={{ base: 12, sm: 4 }}
						mt={{ base: "sm", sm: 0 }}
					>
						<Image
							alt="D&J"
							src="static/images/Initials_Vertical_1.png"
							w={{ base: rem(50), sm: "100%" }}
							m={{ base: "0 auto", sm: "auto" }}
							maw="200"
							h="auto"
							mb={{ base: "0", sm: "lg" }}
							fit="contain"
						/>
					</GridCol>
					<GridCol span={{ base: 12, sm: 8 }}>{children}</GridCol>
				</Grid>
			</Center>
		</>
	);
}
