import React from "react";
import { Metadata } from "next";
import { IntroText, RSVP as RSVPComponent } from "_components";
import { Container, GridCol, Title } from "@mantine/core";
import { FONTS } from "_styles";

export const metadata: Metadata = {
	title: "RSVP",
	description: "Please respond by October 1st.",
};

const RSVP = () => {
	return (
		<GridCol span={12} mt="md">
			<Container>
				<Title className={FONTS.MRS_EAVES.className} order={1}>
					RSVP
				</Title>
				<IntroText>Répondez s&rsquo;il vous plaît.</IntroText>
				<RSVPComponent />
			</Container>
		</GridCol>
	);
};

export default RSVP;
