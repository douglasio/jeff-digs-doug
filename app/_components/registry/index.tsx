"use client";

import { useState } from "react";
import {
	Alert,
	Badge,
	Box,
	Button,
	Center,
	Modal,
	NumberFormatter,
	Paper,
	SimpleGrid,
	Text,
	Title,
} from "@mantine/core";
import { COLORS } from "_styles";
import { useDisclosure } from "@mantine/hooks";
import { Image } from "_components/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowUpRightFromSquare,
	faGift,
} from "@fortawesome/free-solid-svg-icons";
import { mobileNavBreakpoint } from "_util";

type RegistryCardType = {
	id: number;
	image?: {
		title: string;
		url: string;
	};
	title: string;
	description?: string;
	badgeText?: string;
	amount: number;
};

const registryCards: RegistryCardType[] = [
	{
		id: 1,
		image: {
			title: "Doug and Jeff sipping a mysterious purple beverage",
			url: "/static/images/webp/registry-drink.webp",
		},
		title: "Grab us a Drink",
		description: "It can be whatever drink you want, use your imagination.",
		amount: 25,
	},
	{
		id: 2,
		image: {
			title: "Doug and Jeff at Sean and Courteney’s wedding, in which Jeff is flipping off the camera",
			url: "/static/images/webp/registry-attending.webp",
		},
		title: "Standard",
		description: "A standard wedding gift for a standard wedding guest.",
		amount: 100,
	},
	{
		id: 3,
		image: {
			title: "Doug and Jeff on an airplane, Delta Comfort Plus of course",
			url: "/static/images/webp/registry-flight.webp",
		},
		title: "Fly us to Boston",
		description:
			"All of these cross-country flights aren’t cheap. Are you?",
		amount: 500,
	},
	{
		id: 4,
		image: {
			title: "Jeff and Doug holding keys",
			url: "/static/images/webp/registry-mortgage.webp",
		},
		title: "Mortgage Payment",
		description:
			"We don’t have a house yet, but when we do, we’ll think of you when setting up our mortgage autopayments.",
		amount: 1000,
	},
	{
		id: 5,
		image: {
			title: "Jeff pursing his lips with glitter makeup",
			url: "/static/images/webp/jeff-lips.webp",
		},
		title: "VIP Deluxe",
		description:
			"This package might get you a little something special in return.",
		badgeText: "Most Popular",
		amount: 4999,
	},
	{
		id: 6,
		image: {
			title: "Gordy looking ambivalent",
			url: "/static/images/webp/gordy1.webp",
		},
		title: "Tijuana",
		description: "For this tier, you can have Gordy.",
		amount: 1000000,
	},
];

export const RegistryComponent = () => {
	const [modalOpened, modalHandlers] = useDisclosure(false);
	const [gift, setGift] = useState<number>(0);
	const handleModalOpen = (amount: number) => {
		setGift(amount);
		modalHandlers.open();
	};

	return (
		<>
			<SimpleGrid cols={{ base: 1, lg: 2 }} spacing="sm">
				{registryCards.map((card) => (
					<Paper key={card.id}>
						<SimpleGrid
							cols={{ base: 1, sm: 2 }}
							h="100%"
							spacing={{ base: 0, sm: "sm" }}
						>
							{card.image && (
								<div
									className="image-container-warm-ice"
									style={{ minHeight: 350 }}
								>
									<Image
										src={card.image.url}
										alt={card.image.title}
										fill
									></Image>
								</div>
							)}
							<Box mt={{ base: "xs", sm: 0 }}>
								<Title order={2} mb={0}>
									{card.title} Package
								</Title>
								{card.badgeText && (
									<Badge color={COLORS.LAVENDER[3]}>
										{card.badgeText}
									</Badge>
								)}
								{card.description && (
									<Text mt="xs">{card.description}</Text>
								)}
								<Button
									rightSection={
										<FontAwesomeIcon icon={faGift} />
									}
									onClick={() => handleModalOpen(card.amount)}
									variant="outline"
								>
									Gift
								</Button>
							</Box>
						</SimpleGrid>
					</Paper>
				))}
			</SimpleGrid>
			<Modal
				opened={modalOpened}
				onClose={modalHandlers.close}
				onExitTransitionEnd={() => setGift(0)}
				title={
					<NumberFormatter
						prefix="Gift $"
						value={gift}
						thousandSeparator
					/>
				}
				size="xl"
				mih="90vh"
			>
				<Box visibleFrom={mobileNavBreakpoint}>
					<iframe
						src={`https://venmo.com/douglasio?txn=pay&amount=${gift}`}
						title="Gift"
						width="100%"
						height="500"
					/>
					<Center mt="xs">
						<a
							href={`https://venmo.com/douglasio?txn=pay&amount=${gift}`}
							target="_blank"
						>
							Open Venmo in a new window
						</a>
					</Center>
				</Box>
				<Button
					component="a"
					href={`https://venmo.com/douglasio?txn=pay&amount=${gift}`}
					target="_blank"
					rightSection={
						<FontAwesomeIcon
							icon={faArrowUpRightFromSquare}
							style={{ width: "1rem" }}
						/>
					}
					hiddenFrom={mobileNavBreakpoint}
				>
					Open Venmo
				</Button>
				<Alert title="Don&rsquo;t have Venmo?" mt="xs">
					<>An envelope of cash works, too.</>
				</Alert>
			</Modal>
		</>
	);
};

