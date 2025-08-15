import React from "react";
import { Metadata } from "next";
import {
	IntroText,
	RSVP as RSVPComponent,
	SubpageContainer,
} from "_components";
import { Container, GridCol, Title, Text } from "@mantine/core";
import { FONTS } from "_styles";

export const metadata: Metadata = {
	title: "RSVP",
	description: "Please respond by October 1st.",
};

const RSVP = () => {
	return (
		<GridCol span={12} mt={{ base: 0, sm: "md" }}>
			<SubpageContainer>
				<Title className={FONTS.MRS_EAVES.className} order={1}>
					RSVP
				</Title>
				<IntroText>Répondez s&rsquo;il vous plaît.</IntroText>
				<RSVPComponent />
				<Text size="xs" ta="center">
					(If the form isn&rsquo;t working for you,{" "}
					<a
						href="https://dougandjeffswedding.rsvpify.com"
						target="_blank"
					>
						try this
					</a>
					) .
				</Text>
			</SubpageContainer>
		</GridCol>
	);
};

export default RSVP;
