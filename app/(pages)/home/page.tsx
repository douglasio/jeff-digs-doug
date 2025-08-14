import React from "react";
import { Box, Button, Grid, GridCol, Space, Title, rem } from "@mantine/core";
import { Image, IntroText, Nav, SVG } from "_components";
import { contentAreaProps, mobileNavBreakpoint, WEDDING_DETAILS } from "_util";
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
			<Grid
				id="page-grid"
				gutter={{ base: "sm", sm: "xl" }}
				h="100%"
				m={{ base: "0", sm: "auto" }}
				mt="0"
			>
				<GridCol
					span={{ base: 12, md: 5 }}
					// pt="0"
					// pl="0"
					pb="0"
					pt="0"
					// pr={{ base: 0, sm: "xl" }}
				>
					<Box pos="relative" w="100%" h="100%">
						<Image
							className="image-dimmed"
							alt="One of our engagement photos on the beach in the DR"
							fit="cover"
							width={1200}
							height={800}
							h="100%"
							src="/static/images/webp/engagement_1.webp"
						/>
						<Box
							w={{ base: "40%", sm: rem(250) }}
							pos="absolute"
							left="10vw"
							top={{ base: "5%", sm: "10%" }}
						>
							<SVG.Initials
								variant="vertical"
								color="green"
								className={classes.floatingInitials}
							/>
						</Box>
					</Box>
				</GridCol>
				<GridCol span={{ base: 12, md: 7 }} {...contentAreaProps}>
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
					<IntroText mb="sm">
						Welcome to the wedding of Doug &amp; Jeff, where two
						people who love each other are finally getting married.
						No, they&rsquo;re not related. That&rsquo;s what makes
						it so special.
					</IntroText>
					<Button component={Link} href="/our-story">
						See how we got here
					</Button>
				</GridCol>
			</Grid>
			<SVG.CornerLeaves
				className={classes.cornerLeaves}
				color={COLORS.NAVY[8]}
				rotation="bottom-right"
			/>
		</>
	);
};

export default Home;
