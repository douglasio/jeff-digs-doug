import React from "react";
import {
	Container,
	Paper,
	SimpleGrid,
	Space,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import { IntroText } from "_components";
import { FONTS } from "_styles";
import { Timeline } from "_components/timeline";
import * as content from "./content";

const OurStory = () => {
	return (
		<Container>
			<Title className={FONTS.MRS_EAVES.className} order={1}>
				Our Story
			</Title>
			<IntroText>
				Look through this timeline of the story of how made it from
				fools to fianc&eacute;s.
			</IntroText>
			<Space h="md" />
			<Timeline
				events={content.timelineEvents}
				active={content.timelineEvents.length - 3}
			/>
			<Space h="md" />
			<Title order={2} size="lg">
				By the numbers
			</Title>
			<SimpleGrid cols={{ base: 2, sm: 3 }} spacing="sm">
				{content.gridNumbers.map(({ key, label, number }) => (
					<Paper key={key}>
						<Stack>
							<Title h="1rem" order={3}>
								{label}:
							</Title>
							<Text size="xl" ta="center">
								{number}
							</Text>
						</Stack>
					</Paper>
				))}
			</SimpleGrid>
			<Space h="xl" />
		</Container>
	);
};

export default OurStory;
