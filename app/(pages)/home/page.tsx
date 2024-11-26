import React from "react";
import {
	Box,
	Button,
	Grid,
	GridCol,
	Image,
	Space,
	Stack,
	Text,
	Title,
	rem,
} from "@mantine/core";
import { AddToCalendar, Nav, SVG } from "_components";
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
			<Grid className={classes.grid} gutter="xl" align="stretch">
				<GridCol span={{ base: 12, md: 4, xl: 5 }} p="0">
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
				</GridCol>
				<GridCol span={{ base: 12, md: 8, xl: 7 }}>
					<Nav />
					<Space h="lg" visibleFrom="sm" />
					<SVG.IntroLockup className={classes.lockup} />

					<section>
						<Title order={2}>
							{WEDDING_DETAILS.DATE}
							<br />
							<address>
								{WEDDING_DETAILS.VENUE}, {WEDDING_DETAILS.CITY}
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
					</section>
					<Text fs="italic" size="md" lh="sm" w="70%" mt="sm">
						Welcome to the wedding of Doug &amp; Jeff, where two
						people who love each other are finally getting married.
						No, they&rsquo;re not related. That&rsquo;s what makes
						it so special.
					</Text>
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
