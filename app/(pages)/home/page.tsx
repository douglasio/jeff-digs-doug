import React from "react";
import {
	Box,
	Button,
	Container,
	Grid,
	GridCol,
	Image,
	Space,
	Text,
	Title,
	rem,
} from "@mantine/core";
import { AddToCalendar, IntroText, Nav, SVG } from "_components";
import { WEDDING_DETAILS } from "_util";
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
				// className={"page-grid"}
				gutter={{ base: "sm", sm: "xl" }}
				h="100%"
				m={{ base: "0", sm: "auto" }}
				mt="0"
			>
				<GridCol
					span={{ base: 12, sm: 5 }}
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
							w={"100%"}
							h="100%"
							src="static/images/engagement_1.jpg"
							loading="lazy"
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
				<GridCol span={{ base: 12, sm: 7 }} p="sm">
					<Space h="lg" visibleFrom="sm" />
					<Box visibleFrom="sm">
						<Nav variant="inline" showLogo={false} />
					</Box>
					<Space h="sm" visibleFrom="sm" />
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
						<AddToCalendar
							event={{
								title: "Doug &amp; Jeff&rsquo;s Wedding",
								description: "https://www.jeffdigsdoug.com/",
								start: "2025-11-08 16:00:00 -0800",
								end: "2025-11-08 22:00:00 -0800",
								location: `${WEDDING_DETAILS.VENUE}, ${WEDDING_DETAILS.STREET}, ${WEDDING_DETAILS.CITY}`,
							}}
						/>
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
