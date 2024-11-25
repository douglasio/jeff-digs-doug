import { Grid, GridCol, Center, Image } from "@mantine/core";
import { SVG } from "_components";
import { Providers } from "_providers";
import classes from "./layout.module.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Providers>
			<main className={classes.main}>
				<section>
					<Grid
						gutter={{ base: "md", sm: "xl" }}
						m={{ base: "0", sm: "xl" }}
						mb="xl"
					>
						<GridCol
							span={{ base: 12, sm: 4 }}
							mt={{ base: "sm", sm: 0 }}
							ta="right"
						>
							<SVG.Initials
							// w={{ base: "150px", sm: "100%", md: "250px" }}
							// m={{ base: "0 auto", sm: "auto" }}
							// h="auto"
							// mb={{ base: "0", sm: "lg" }}
							// pr="0"
							// mr={{ base: "auto", sm: "0" }}
							/>
						</GridCol>
						<GridCol span={{ base: 12, sm: 8 }}>{children}</GridCol>
					</Grid>
				</section>
				<footer>
					<Center>
						<Image
							alt="decorative leaves"
							src="static/images/center_leaves.png"
							w={{ base: "110vw", sm: "50vw" }}
							maw="950px"
							mt="lg"
						/>
					</Center>
				</footer>
			</main>
		</Providers>
	);
}
