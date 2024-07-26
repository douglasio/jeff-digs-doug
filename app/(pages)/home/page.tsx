import React from "react";
import {
	Button,
	Grid,
	GridCol,
	Image,
	Space,
	Text,
	Title,
} from "@mantine/core";
import { Nav, SVG } from "_components";
import { WEDDING_DETAILS } from "_util";
import classes from "./page.module.css";

export const metadata = {
	title: "Home",
};

const Home = () => {
	return (
		<Grid className={classes.grid} gutter="xl" align="stretch">
			<GridCol hiddenFrom="sm">
				<Nav />
			</GridCol>
			<GridCol span={{ base: 12, md: 4, xl: 5 }} p="0">
				{/* <Transition transition={"fade-down"}> */}
				<Image
					className="image-dimmed"
					alt="One of our engagement photos on the beach in the DR"
					fit="cover"
					w={"100%"}
					h="100%"
					src="static/images/engagement_1.jpg"
					loading="lazy"
				/>
				<SVG.Initials
					variant="vertical"
					color="green"
					className={classes.floatingInitials}
				/>
				{/* </Transition> */}
			</GridCol>
			<GridCol span={{ base: 12, md: 8, xl: 7 }}>
				<Nav />
				<Space h="lg" />
				<SVG.IntroLockup className={classes.lockup} />
				<Space h="sm" />
				<Title order={2} fs="italic">
					{WEDDING_DETAILS.DATE}
					<br />
					{WEDDING_DETAILS.VENUE}, {WEDDING_DETAILS.CITY}
				</Title>
				<Space h="sm" />
				<Text fs="italic" size="md" lh="sm" w="70%">
					Welcome to the wedding of Doug &amp; Jeff, where two people
					who love each other are finally getting married. No,
					they&rsquo;re not related. That&rsquo;s what makes it so
					special.
				</Text>
				<Button mt="md">See how we got here</Button>
			</GridCol>
		</Grid>
	);
};

export default Home;
