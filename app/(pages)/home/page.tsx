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
import { Nav, SVG } from "_components";
import { WEDDING_DETAILS } from "_util";
import classes from "./page.module.css";
import { COLORS } from "_styles";

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
					<Stack align="flex-start" justify="flex-start" gap="md">
						<Space h="lg" visibleFrom="sm" />
						<SVG.IntroLockup className={classes.lockup} />
						{/* <Space h="sm" /> */}
						<Title order={2} fs="italic">
							{WEDDING_DETAILS.DATE}
							<br />
							{WEDDING_DETAILS.VENUE}, {WEDDING_DETAILS.CITY}
						</Title>
						{/* <Space h="sm" /> */}
						<Text fs="italic" size="md" lh="sm" w="70%">
							Welcome to the wedding of Doug &amp; Jeff, where two
							people who love each other are finally getting
							married. No, they&rsquo;re not related. That&rsquo;s
							what makes it so special.
						</Text>
						<Button mt="md">See how we got here</Button>
					</Stack>
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
