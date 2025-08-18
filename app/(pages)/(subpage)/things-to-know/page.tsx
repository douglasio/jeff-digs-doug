import React from "react";
import { Metadata } from "next";
import { IntroText } from "_components";
import {
	Button,
	List,
	ListItem,
	Paper,
	type PaperProps,
	SimpleGrid,
	Text,
	Title,
	type TitleProps,
	Accordion,
	AccordionItem,
	AccordionControl,
	AccordionPanel,
	Space,
	Image as MantineImage,
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

const dressCodeImages = [
	"https://i.pinimg.com/736x/c8/5c/15/c85c158a188026310e4ccb2a3c2ef896.jpg",
	"https://i.pinimg.com/736x/f1/90/82/f190825935e0ea210367f58d0155b86d.jpg",
	"https://i.pinimg.com/736x/45/a7/61/45a7618a7c3a98d9201c488e569c5b8c.jpg",
	"https://i.pinimg.com/736x/b8/81/d8/b881d8f193e97a8c4cd3bebd50f51db6.jpg",
];

const things = [
	{
		title: "Hotels",
		body: (
			<>
				<Text>
					A hotel block with a discounted rate is available at{" "}
					<a href="https://www.coveatsalem.com/" target="_blank">
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
					variant="outline"
				>
					Book a room
				</Button>

				<Text mt="sm">
					Use the link above to get the room block rates listed below,
					or book wherever wherever you want, you&rsquo;re an
					independent lady.
				</Text>

				<Title order={5}>Rates:</Title>
				<List mr="sm">
					<ListItem>
						Double Queen
						<Text component="span" display="block" py={0} size="xs">
							3 available
						</Text>
						<Text component="span" display="block" py={0} size="xs">
							$299 per night plus tax
						</Text>
					</ListItem>
					<ListItem mt="xs">
						Double Queen Suite
						<Text component="span" display="block" py={0} size="xs">
							5 available
						</Text>
						<Text component="span" display="block" py={0} size="xs">
							$339 per night plus tax
						</Text>
					</ListItem>
					<ListItem mt="xs">
						King Suite
						<Text component="span" display="block" py={0} size="xs">
							7 available
						</Text>
						<Text component="span" display="block" py={0} size="xs">
							$349 per night plus tax
						</Text>
					</ListItem>
				</List>
			</>
		),
	},
	{
		title: "RSVPs",
		body: (
			<>
				<Text>
					All RSVPs can be submitted digitally via this website. See
					your invitation for details or ask for more info.
				</Text>
				<Text>
					We request that all RSVPs be submitted by{" "}
					<strong>October 1, 2025</strong>.
				</Text>
				<Button component={Link} variant="outline" href="/rsvp">
					RSVP
				</Button>
			</>
		),
	},
	{
		title: "Transportation",
		body: (
			<>
				<Title order={5}>Shuttle</Title>
				<Text>
					Shuttles will be provided from The Cove Hotel to Willowdate
					Estate.
				</Text>
				<Title order={5}>Parking</Title>
				<Text>
					There is ample parking at the venue if you are driving.
				</Text>
			</>
		),
	},
	{
		title: "Plus Ones and Children",
		body: (
			<>
				<Text>
					Wedding guests may only bring a plus one if it was
					specifically mentioned in their invitation.
				</Text>
				<Text>
					Please do not bring your children or pets to our wedding. It
					would make Boba too jealous.
				</Text>
			</>
		),
	},
	{
		title: "Photos",
		body: (
			<>
				<Text>
					We will have professional photographers documenting the
					evening.
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
						Posting ceremony photos on social media after Jeff and
						Doug have posted the professional shots
					</ListItem>
				</List>
			</>
		),
	},
	{
		title: "Bar",
		body: (
			<>
				<Text>
					We are happy to provide an open bar for the entire evening.
				</Text>
				<Text>Drink up if you partake, fools.</Text>
			</>
		),
	},
	{
		title: "Dress Code",
		body: (
			<>
				<Text>
					Think <em>Hunger Games</em> Capitol realness. The costumes,
					not the killing. Unless...
				</Text>
				<Text>
					But, y&rsquo;know, do your best. Traditional wedding attire
					is also acceptable if{" "}
					<a
						href="https://thehungergames.fandom.com/wiki/Cinna"
						target="_blank"
					>
						Cinna
					</a>{" "}
					is unavailable to design your look.
				</Text>
				<Button
					component="a"
					href="https://pin.it/1EeqEsc06"
					target="_blank"
					rightSection={
						<FontAwesomeIcon
							icon={faArrowUpRightFromSquare}
							style={{ width: "1rem" }}
						/>
					}
				>
					Check the Pinterest board
				</Button>
				<SimpleGrid cols={2} my="sm" spacing="sm">
					{dressCodeImages.map((image, i) => (
						<MantineImage
							key={i}
							src={image}
							className="image-dimmed"
							width={607}
							height={911}
							w="100%"
							h="auto"
						/>
					))}
				</SimpleGrid>
			</>
		),
	},
];

const ThingsToKnow = () => {
	return (
		<>
			{/* need a spacer if there's no grid */}
			<Space h="sm" />
			<Title className={FONTS.MRS_EAVES.className} order={1}>
				Things to Know
			</Title>
			<IntroText>Because no wedding is complete without rules.</IntroText>
			<SimpleGrid
				visibleFrom="sm"
				cols={{ base: 1, [mobileNavBreakpoint]: 2 }}
			>
				{things.map((thing) => (
					<Paper key={thing.title} {...paperProps}>
						<SectionTitle>{thing.title}</SectionTitle>
						{thing.body}
					</Paper>
				))}
			</SimpleGrid>
			<Accordion hiddenFrom="sm" multiple>
				{things.map((thing) => (
					<AccordionItem key={thing.title} value={thing.title}>
						<AccordionControl>{thing.title}</AccordionControl>
						<AccordionPanel>{thing.body}</AccordionPanel>
					</AccordionItem>
				))}
			</Accordion>
		</>
	);
};

export default ThingsToKnow;
