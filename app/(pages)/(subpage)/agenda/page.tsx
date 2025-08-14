import React from "react";
import { type Metadata } from "next";
import Image from "next/image";
import {
	AspectRatio,
	GridCol,
	Image as MantineImage,
	Space,
	Text,
	Title,
} from "@mantine/core";
import { contentAreaProps, mobileNavBreakpoint, PHOTO_CREDIT } from "_util";
import { FONTS } from "_styles";
import { FilterAgenda, IntroText } from "_components";

export const metadata: Metadata = {
	title: "Agenda",
	description: "Always know where you need to be.",
};

const LeftImage = () => (
	<MantineImage
		component={Image}
		alt={`Jeff feeding Doug and arancini post-engagement: ${PHOTO_CREDIT.ENGAGEMENT}`}
		src="/static/images/webp/engagement_feeding.webp"
		height={1350}
		width={900}
		quality={95}
		className="image-dimmed image-fill"
		// placeholder="blur"
	/>
);

const Agenda = () => {
	return (
		<>
			<GridCol span={{ base: 12, md: 5 }}>
				<AspectRatio visibleFrom={mobileNavBreakpoint} ratio={4 / 6}>
					<LeftImage />
				</AspectRatio>
			</GridCol>
			<GridCol span={{ base: 12, md: 7 }} {...contentAreaProps}>
				<Title className={FONTS.MRS_EAVES.className} order={1}>
					Agenda
				</Title>
				<IntroText>
					Not all those who wander are lost. But in the event that you
					<strong> are</strong> lost, look here to figure out where
					you&rsquo;re supposed to be.
				</IntroText>

				<Text w="80%">
					These dates and times and events are all subject to change.
					Check back closer to the wedding date to verify.
				</Text>

				<FilterAgenda />

				<AspectRatio
					mt="xl"
					hiddenFrom={mobileNavBreakpoint}
					ratio={4 / 3}
				>
					<LeftImage />
				</AspectRatio>
				<Space h="xl" />
			</GridCol>
		</>
	);
};

export default Agenda;
