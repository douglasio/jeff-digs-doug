import React from "react";
import { Metadata } from "next";
import { IntroText } from "_components";
import {
	Button,
	Container,
	GridCol,
	List,
	ListItem,
	Paper,
	type PaperProps,
	SimpleGrid,
	Text,
	Title,
	type TitleProps,
} from "@mantine/core";
import { COLORS, FONTS } from "_styles";
import { mobileNavBreakpoint } from "_util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowUpRightFromSquare,
	faThumbsDown,
	faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Things to Know",
	description: "Because no wedding is complete without rules.",
};

const SectionTitle = ({ children }: TitleProps) => (
	<Title order={2}>{children}</Title>
);

const paperProps: PaperProps = {
	p: "sm",
};

const listItemProps = {
	check: {
		icon: (
			<FontAwesomeIcon
				icon={faThumbsUp}
				color={COLORS.SAGE[5]}
				height="1em"
				style={{ marginTop: "3px" }} //visual adjustment to align with text
				title="Do"
			/>
		),
	},
	x: {
		icon: (
			<FontAwesomeIcon
				icon={faThumbsDown}
				color={COLORS.NAVY[5]}
				height="1em"
				style={{ marginTop: "7px" }} //visual adjustment to align with text
				title="Don't"
			/>
		),
	},
};

const ThingsToKnow = () => {
	return (
		<GridCol span={12} mt="md">
			<Container w="100%">
				<Title className={FONTS.MRS_EAVES.className} order={1}>
					Things to Know
				</Title>
				<IntroText>
					Because no wedding is complete without rules.
				</IntroText>
				<SimpleGrid cols={{ base: 1, [mobileNavBreakpoint]: 2 }}>
					<Paper {...paperProps}>
						<SectionTitle>Hotels</SectionTitle>
						<Text>
							A hotel block with a discounted rate is available at{" "}
							<a
								href="https://www.coveatsalem.com/"
								target="_blank"
							>
								The Cove Hotel
							</a>{" "}
							in Salem, MA.
						</Text>
						<Button
							component="a"
							href="https://app.mews.com/distributor/cb5dea8f-d140-45d4-927c-b241005464d4?mewsAvailabilityBlockId=57549677-c061-4830-b419-b2a2016540b2&mewsStart=2025-11-07&mewsEnd=2025-11-09"
							target="_blank"
							rightSection={
								<FontAwesomeIcon
									icon={faArrowUpRightFromSquare}
									style={{ width: "1rem" }}
								/>
							}
						>
							Book a room
						</Button>

						<Text mt="sm">
							Use the link above to get the room block rates
							listed below, or book wherever wherever you want,
							you&rsquo;re an independent lady.
						</Text>

						<Title order={5}>Rates:</Title>
						<List mr="sm">
							<ListItem>
								Double Queen
								<br />3 available
								<br />
								$299 per night plus tax
							</ListItem>
							<ListItem>
								Double Queen Suite
								<br />5 available
								<br />
								$339 per night plus tax
							</ListItem>
							<ListItem>
								King Suite
								<br />7 available
								<br />
								$349 per night plus tax
							</ListItem>
						</List>
					</Paper>
					<Paper {...paperProps}>
						<SectionTitle>RSVPs</SectionTitle>
						<Text>
							All RSVPs can be submitted digitally via this
							website. See your invitation for details or ask for
							more info.
						</Text>
						<Text>
							We request that all RSVPs be submitting by{" "}
							<strong>October 1, 2025</strong>.
						</Text>
						<Button component={Link} href="/rsvp">
							RSVP
						</Button>
					</Paper>
					<Paper {...paperProps}>
						<SectionTitle>Transportation</SectionTitle>
						<Title order={5}>Shuttle</Title>
						<Text>
							Shuttles will be provided from The Cove Hotel to
							Willowdate Estate.
						</Text>
						<Title order={5}>Parking</Title>
						<Text>
							There is ample parking at the venue if you are
							driving.
						</Text>
					</Paper>
					<Paper {...paperProps}>
						<SectionTitle>Plus Ones and Children</SectionTitle>
						<Text>
							Wedding guests may only bring a plus one if it was
							specifically mentioned in their invitation.
						</Text>
						<Text>
							Please do not bring your children or pets to our
							wedding.
						</Text>
					</Paper>
					<Paper {...paperProps}>
						<SectionTitle>Photos</SectionTitle>
						<Text>
							We will have professional photographers documenting
							the evening.
						</Text>
						<Title order={3}>Do&rsquo;s and Don&rsquo;ts:</Title>
						<List {...listItemProps.check}>
							<ListItem {...listItemProps.x}>
								Conspicuous photo-taking during the ceremony
							</ListItem>
							<ListItem>Photos during the reception</ListItem>
							<ListItem {...listItemProps.x}>
								Posting photos of the ceremony social media
							</ListItem>
							<ListItem>
								Posting ceremony photos on social media after
								Jeff and Doug have posted the professional shots
							</ListItem>
						</List>
					</Paper>
					<Paper {...paperProps}>
						<SectionTitle>Bar</SectionTitle>
						<Text>
							We are happy to provide an open bar for the entire
							evening.
						</Text>
						<Text>Drink up if you partake, fools.</Text>
					</Paper>
					<Paper {...paperProps}>
						<SectionTitle>Dress Code</SectionTitle>
						<Text>
							Think <em>Hunger Games</em>. The costumes, not the
							killing. Well...
						</Text>
					</Paper>
				</SimpleGrid>
			</Container>
		</GridCol>
	);
};

export default ThingsToKnow;
