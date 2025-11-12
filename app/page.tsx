import React from "react";
import {
	Box,
	Button,
	Container,
	Grid,
	GridCol,
	Group,
	Space,
	Text,
	Title,
} from "@mantine/core";

import { HeroImage, IntroText, SVG } from "_components";
import { mobileNavBreakpoint } from "_util";
import classes from "./page.module.css";
import { COLORS, FONTS } from "_styles";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
	title: "Doug & Jeff’s Wedding",
};

const Home = () => {
	return (
		<>
			{/* <Nav
				className={classes.homeMobileNav}
				variant="inline"
				showLogo={false}
			/> */}
			<Container px={0} fluid>
				<Grid gutter={0}>
					<GridCol span={{ base: 12, md: 5 }} pb="0" pt="0">
						<HeroImage />
					</GridCol>
					<GridCol
						span={{ base: 12, md: 7 }}
						pl={{ base: 0, [mobileNavBreakpoint]: "sm" }}
					>
						<Container
							fluid
							mx={0}
							mt={{ base: "md", [mobileNavBreakpoint]: 0 }}
						>
							<Space h="xl" visibleFrom={mobileNavBreakpoint} />

							<Title
								className={FONTS.MRS_EAVES.className}
								order={1}
								size={75}
								mb="sm"
								ml="-0.15em"
							>
								Thank you.
							</Title>

							<Title order={2} size="40">
								&ldquo;I&rsquo;ve had the time of my life, and I
								owe it all to you.&rdquo;
								<Text mt="xs" ml="sm">
									&mdash; The Time (Dirty Bit),{" "}
									<span className="text-no-wrap">
										The Black Eyed Peas
									</span>
								</Text>
							</Title>

							<Box mt="sm">
								<IntroText>
									This wedding was everything we
									could&rsquo;ve hoped for, and so much more.
									Turns out us not being related wasn&rsquo;t
									what made it so special after all&mdash;it
									was all of you.
								</IntroText>
							</Box>
							<Group gap="sm">
								<Button
									component="a"
									display="inline-block"
									href="https://www.jeffdigsdoug.com/photos"
									target="_blank"
									rightSection={
										<FontAwesomeIcon
											icon={faArrowUpRightFromSquare}
											style={{ width: "1rem" }}
										/>
									}
								>
									Send us your photos
								</Button>
								<Button component={Link} href="/registry">
									Visit the registry
								</Button>
							</Group>
							<Space h="md" />
							<Title order={2}>Credit Where Credit Is Due</Title>
							<Text>
								A special thanks to all of our vendors, friends,
								family, and SaaS products who made this happen.
							</Text>
							<Button
								component={Link}
								href="/credits"
								variant="outline"
							>
								View the credits
							</Button>

							<Text size="xs" mt="lg" w="70%">
								Note: This website will self-destruct whenever
								the domain registration expires.
							</Text>
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
