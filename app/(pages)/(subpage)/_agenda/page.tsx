import React from "react";
import { type Metadata } from "next";
import {
	AspectRatio,
	Chip,
	GridCol,
	Group,
	Image,
	Space,
	Title,
} from "@mantine/core";
import { contentAreaProps, mobileNavBreakpoint, PHOTO_CREDIT } from "_util";
import { FONTS } from "_styles";
import { IntroText } from "_components";

export const metadata: Metadata = {
	title: "Agenda",
	description: "Always know where you need to be.",
};

const LeftImage = () => (
	<Image
		alt={`Jeff feeding Doug and arancini post-engagement: ${PHOTO_CREDIT.ENGAGEMENT}`}
		src={"static/images/engagement_feeding.jpg"}
		className="image-dimmed image-fill"
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
					are lost, look here to figure out where you&rsquo;re
					supposed to be.
				</IntroText>

				<Group gap="xs">
					<Chip defaultChecked>Everyone</Chip>
					<Chip>Guests</Chip>
					<Chip>Wedding Party</Chip>
					<Chip>The Couple</Chip>
				</Group>

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
