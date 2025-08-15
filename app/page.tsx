import React from "react";
import {
	Box,
	Button,
	Container,
	Grid,
	GridCol,
	Space,
	Title,
} from "@mantine/core";

import { HeroImage, IntroText, Nav, SVG } from "_components";
import { pageGutterSize, mobileNavBreakpoint, WEDDING_DETAILS } from "_util";
import classes from "./page.module.css";
import { COLORS } from "_styles";
import Link from "next/link";

export const metadata = {
	title: "Home",
};

const Home = () => {
	return (
		<>
			<Nav
				className={classes.homeMobileNav}
				variant="inline"
				showLogo={false}
			/>
			<Container px={0} fluid>
				<Grid gutter={0}>
					<GridCol span={{ base: 12, md: 5 }} pb="0" pt="0">
						<HeroImage />
					</GridCol>
					<GridCol
						span={{ base: 12, md: 7 }}
						pl={{ base: 0, [mobileNavBreakpoint]: "md" }}
					>
						<Container
							fluid
							mx={pageGutterSize}
							mt={{ base: "md", [mobileNavBreakpoint]: 0 }}
						>
							<Space h="lg" visibleFrom={mobileNavBreakpoint} />
							<Box visibleFrom={mobileNavBreakpoint}>
								<Nav variant="inline" showLogo={false} />
							</Box>
							<Space h="sm" visibleFrom={mobileNavBreakpoint} />
							<SVG.IntroLockup className={classes.lockup} />
							<Box mb="sm">
								<Title order={2}>
									{WEDDING_DETAILS.DATE}
									<br />
									<address>
										{WEDDING_DETAILS.VENUE},{" "}
										<span className="text-no-wrap">
											{WEDDING_DETAILS.CITY}
										</span>
									</address>
								</Title>
							</Box>
							<IntroText mb="md">
								Welcome to the wedding of Doug &amp; Jeff, where
								two people who love each other are finally
								getting married. No, they&rsquo;re not related.
								That&rsquo;s what makes it so special.
							</IntroText>
							<Button component={Link} href="/our-story">
								See how we got here
							</Button>
							<Space h="lg" />
						</Container>
					</GridCol>
				</Grid>
			</Container>

			<SVG.CornerLeaves
				className={classes.cornerLeaves}
				color={COLORS.NAVY[8]}
				rotation="bottom-right"
			/>
		</>
	);
};

export default Home;
