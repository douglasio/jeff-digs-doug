import React from "react";
import { Metadata } from "next";
import { IntroText } from "_components";
import {
	AspectRatio,
	Badge,
	Button,
	Card,
	CardSection,
	Container,
	Grid,
	GridCol,
	Image,
	SimpleGrid,
	Space,
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
	buttonText,
	badgeText,
}: RegistryCardProps) => {
	return (
		<Card>
			<CardSection>
				<AspectRatio ratio={1 / 1} className="image-container-warm-ice">
					<Image src={imageUrl} alt={title}></Image>
				</AspectRatio>
			</CardSection>
			<Title mt="xs" order={2}>
				{title} Package{" "}
				{badgeText && (
					<Badge color={COLORS.LAVENDER[5]}>{badgeText}</Badge>
				)}
			</Title>
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

const Registry = () => {
	return (
		<>
			{/* need a spacer if there's no grid */}
			<Space h="sm" />
			<Title className={FONTS.MRS_EAVES.className} order={1}>
				Registry
			</Title>
			<IntroText>
				Imagine no possessions. It&rsquo;s easy if you try. Money, on
				the other hand...
			</IntroText>
			<SimpleGrid cols={{ base: 1, sm: 2, xl: 4 }}>
				<RegistryCard
					imageUrl="/static/images/webp/gordy1.webp"
					title="Grab a Drink"
					description="If you want to be polite, but cash is tight."
					buttonText="Give $25"
				/>
				<RegistryCard
					imageUrl="/static/images/webp/gordy2.webp"
					title="A Nice Dinner"
					description="You&rsquo;ve been to a wedding before, you know how this goes."
					buttonText="Give $100"
				/>
				<RegistryCard
					imageUrl="/static/images/webp/gordy3.webp"
					title="Flight to Boston"
					description="You want the couple to be able to."
					buttonText="Give $500"
				/>
				<RegistryCard
					imageUrl="/static/images/webp/gordy4.webp"
					title="Mortgage Payment"
					description="If you want to be polite, but cash is tight."
					buttonText="Give $1,000"
					badgeText="Most Popular"
				/>
			</SimpleGrid>
		</>
	);
};

export default Registry;
