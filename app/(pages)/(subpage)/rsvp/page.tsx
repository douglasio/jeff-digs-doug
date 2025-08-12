import React from "react";
import { Metadata } from "next";
import { IntroText, RSVP as RSVPComponent } from "_components";
import {
	AspectRatio,
	Badge,
	Button,
	Card,
	CardSection,
	Container,
	GridCol,
	Image,
	SimpleGrid,
	Title,
} from "@mantine/core";
import { COLORS, FONTS } from "_styles";

export const metadata: Metadata = {
	title: "Registry",
	description: "It's not about the money, except on this page it is.",
};

type RegistryCardProps = {
	imageUrl: string;
	title: string;
	description: string;
	buttonText: string;
	badgeText?: string;
};

const RegistryCard = ({
	imageUrl,
	title,
	description,
	buttonText,
	badgeText,
}: RegistryCardProps) => {
	return (
		<Card>
			<CardSection>
				<AspectRatio ratio={1 / 1} className="image-container-warm-ice">
					<Image src={imageUrl}></Image>
				</AspectRatio>
			</CardSection>
			<Title mt="xs" order={2}>
				{title} Package{" "}
				{badgeText && (
					<Badge color={COLORS.LAVENDER[5]}>{badgeText}</Badge>
				)}
			</Title>
			{/* <Text>{description}</Text> */}
			<Button
				component="a"
				href="https://account.venmo.com/u/Douglasio"
				target="_blank"
			>
				{buttonText}
			</Button>
		</Card>
	);
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
