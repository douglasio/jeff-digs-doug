import React from "react";
import { Metadata } from "next";
import { IntroText } from "_components";
import {
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
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

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
			/>
		),
	},
};

const ThingsToKnow = () => {
	return (
		<GridCol span={12} mt="md">
			<Container>
				<Title className={FONTS.MRS_EAVES.className} order={1}>
					Things to Know
				</Title>
				<IntroText>
					Because no wedding is complete without rules.
				</IntroText>
				<SimpleGrid cols={{ base: 1, [mobileNavBreakpoint]: 2, xl: 3 }}>
					<Paper {...paperProps}>
						<SectionTitle>Dress Code</SectionTitle>
						<Text>
							Think <em>Hunger Games</em>. The costumes, not the
							killing. Well...
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
						<SectionTitle>Parking</SectionTitle>
						<Text>There is ample parking at the venue.</Text>
					</Paper>
					<Paper {...paperProps}>
						<SectionTitle>RSVPs</SectionTitle>
						<Text>
							All RSVPs will be digital via this website, see your
							invitation for details or ask us for more info.
						</Text>
						<Text>
							We request you submit your all RSVPs by August 1,
							2025.
						</Text>
					</Paper>
					<Paper {...paperProps}>
						<SectionTitle>Bar</SectionTitle>
						<Text>
							We are happy to provide an open bar for the entire
							evening. Drink up if you partake, fools.
						</Text>
					</Paper>
					<Paper {...paperProps}>
						<SectionTitle>Photos</SectionTitle>
						<Text>
							We will have professional photographers documenting
							the evening.
						</Text>
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
				</SimpleGrid>
			</Container>
		</GridCol>
	);
};

export default ThingsToKnow;
