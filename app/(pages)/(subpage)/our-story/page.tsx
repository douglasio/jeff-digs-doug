import React from "react";
import { Container, Space, Title } from "@mantine/core";
import { IntroText } from "_components";
import { FONTS } from "_styles";
import { Timeline } from "_components/timeline";
import { faHandshake, faSmile } from "@fortawesome/free-solid-svg-icons";

const timelineEvents = [
	{
		key: 1,
		bullet: faHandshake,
		date: "September 2020",
		title: "Swiped right on Tinder",
		description:
			"These were the photos that made up swipe right. After a lot of hemming and hawing over what was sort of first date acceptable during COVID, we eventually agreed to meet up.",
		image: {
			url: "/static/images/timeline_092020.jpg",
			alt: "Doug and Jeff Tinder images",
		},
	},
	{
		key: 2,
		bullet: faSmile,
		date: "September 2020",
		title: "First date at Night Shift Brewery",
		description: `
				We split a Chicken &amp; Rice Guys even though we both would
				have happily destroyed our own. Jeff thought Doug was ditching
				him because he had to use the bathroom. But he wasn&rsquo;t!
			`,
	},
	{
		key: 3,
		bullet: faSmile,
		date: "You&rsquo;ve created new branch",
		title: "Hi",
		description: "fix-notifications",
	},
	{
		key: 4,
		bullet: faSmile,
		date: "You&rsquo;ve created new branch",
		title: "Hi",
		description: "fix-notifications",
	},
	{
		key: 5,
		bullet: faSmile,
		date: "You&rsquo;ve created new branch",
		title: "Hi",
		description: "fix-notifications",
	},
];

const OurStory = () => {
	return (
		<Container>
			<Title className={FONTS.MRS_EAVES.className} order={1}>
				Our Story
			</Title>
			<IntroText>
				Look through this timeline of the story of how we got to
				marriage.
			</IntroText>
			<Space h="md" />
			<Timeline events={timelineEvents} />
		</Container>
	);
};

export default OurStory;
