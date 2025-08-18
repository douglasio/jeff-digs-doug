"use client";

import { type ReactNode, useState } from "react";
import {
	Badge,
	Container,
	Chip,
	Group,
	Paper,
	Text,
	Title,
	ListItem,
	List,
	Image,
} from "@mantine/core";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { WEDDING_DETAILS } from "_util";
import { AddToCalendar } from "_components/add-to-calendar";
import { COLORS } from "_styles";
import classes from "./index.module.css";

const audiences = [
	// "Everyone",
	"Guests",
	"Wedding Party",
	"The Couple",
] as const;

const audienceColors = [
	COLORS.SAGE[9],
	COLORS.LAVENDER[9],
	COLORS.OFF_WHITE[5],
];

const locations = {
	willowdale: {
		name: WEDDING_DETAILS.VENUE,
		address: `${WEDDING_DETAILS.STREET}, ${WEDDING_DETAILS.CITY}`,
		url: "https://www.google.com/maps?ll=42.654335,-70.906746&z=16&t=m&hl=en&gl=CA&mapclient=embed&cid=14417013443772427252",
	},
	deacongiles: {
		name: "Deacon Giles Distillery",
		address: "75 Canal Street, Salem, MA",
		url: "https://www.google.com/maps/place/Deacon+Giles+Distillery/@42.5133727,-70.8984996,2221m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89e31487c30046bf:0x100b9c44b66cd70b!8m2!3d42.5133688!4d-70.8959247!16s%2Fg%2F11cm18fpdg?hl=en&entry=ttu&g_ep=EgoyMDI1MDgxMC4wIKXMDSoASAFQAw%3D%3D",
	},
};

type AudienceType = (typeof audiences)[number];

type EventType = {
	id: number;
	name: string;
	startTime: Date;
	endTime: Date;
	location?: {
		name: string;
		address: string;
		url: string;
	};
	description?: ReactNode | string;
	audience: AudienceType;
	showDate: boolean;
	showTime: boolean;
}[];

const events: EventType = [
	{
		id: 1,
		name: "Wedding Rehearsal",
		startTime: new Date("2025-10-07 15:00:00"),
		endTime: new Date("2025-10-07 16:00:00"),
		location: locations.willowdale,
		// description: "More details to come.",
		audience: "Wedding Party",
		showDate: true,
		showTime: false,
	},
	{
		id: 7,
		name: "Rehearsal Dinner",
		startTime: new Date("2025-10-07 17:00:00"),
		endTime: new Date("2025-10-07 19:00:00"),
		location: locations.deacongiles,
		description:
			"After the rehearsal, the wedding party will regroup at Deacon Giles to enjoy food and drinks on us before other guests arrive.",
		audience: "Wedding Party",
		showDate: true,
		showTime: true,
	},
	{
		id: 5,
		name: "Reception",
		startTime: new Date("2025-11-08 18:00:00"),
		endTime: new Date("2025-11-08 23:30:00"),
		location: locations.willowdale,
		description: (
			<>
				<Text>
					We&rsquo;re still finalizing the intinerary for the evening,
					but here&rsquo;s a preview of what to expect:
				</Text>
				<List size="sm">
					<ListItem>Cocktail hour</ListItem>
					<ListItem>The Roast of Doug & Jeff</ListItem>
					<ListItem>Food</ListItem>
					<ListItem>Dancing</ListItem>
					<ListItem>Late night snacks</ListItem>
				</List>
			</>
		),
		audience: "Guests",
		showDate: true,
		showTime: true,
	},
	{
		id: 3,
		name: "Welcome Drinks",
		startTime: new Date("2025-10-07 19:00:00"),
		endTime: new Date("2025-10-07 21:00:00"),
		location: locations.deacongiles,
		description: (
			<>
				If you&rsquo;re in town early, please join us following our
				rehearsal dinner for a welcome beverage (or three) on us!
				Seriously, we&rsquo;ve got minimums to hit. Kindly let us know
				if you are planning to join using the{" "}
				<Link href="/rsvp">RSVP form</Link>.
			</>
		),
		audience: "Guests",
		showDate: true,
		showTime: true,
	},
	{
		id: 2,
		name: "Ceremony",
		startTime: new Date("2025-11-08 16:00:00"),
		endTime: new Date("2025-11-08 17:00:00"),
		location: locations.willowdale,
		// description: "Transportation will be provided to the ceremony/reception venue for those staying in Salem.",
		audience: "Guests",
		showDate: true,
		showTime: true,
	},
	{
		id: 8,
		name: "Live Happily Ever After",
		startTime: new Date("2025-11-09 16:00:00"),
		endTime: new Date("2025-11-09 16:00:00"),
		audience: "The Couple",
		description: (
			<Image
				src="/static/images/webp/doug-and-jeff-happy.webp"
				alt="Doug and Jeff living happily ever after"
				className="image-dimmed-more"
			/>
		),
		showDate: false,
		showTime: false,
	},
];

export const FilterAgenda = () => {
	const [selectedAudience, setSelectedAudience] = useState<AudienceType[]>([
		...audiences,
	]);

	const toggleAudience = (audience: AudienceType) => {
		if (selectedAudience.length === audiences.length) {
			setSelectedAudience([audience]);
		} else if (selectedAudience.includes(audience)) {
			setSelectedAudience(selectedAudience.filter((a) => a !== audience));
		} else {
			setSelectedAudience([...selectedAudience, audience]);
		}
	};

	const toggleOneAudience = (audience: AudienceType) => {
		setSelectedAudience([audience]);
	};

	return (
		<Container fluid px={0}>
			<Group
				// justify="center"
				gap="xs"
				pos="sticky"
				top={`var(--mobile-nav-height)`}
				py="sm"
				className={classes.chips}
			>
				{audiences.map((audience, i) => {
					const isSelected = selectedAudience.includes(audience);
					return (
						<Chip
							key={`${audience}${i}`}
							checked={isSelected}
							onClick={() => toggleAudience(audience)}
							color={audienceColors[audiences.indexOf(audience)]}
							style={{ zIndex: 95 }}
						>
							{audience}
						</Chip>
					);
				})}
			</Group>

			{selectedAudience.length === 0 && (
				<AnimatePresence>
					<motion.div
						key={1}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<Text fw="bold">
							Well you have to pick <em>something</em>...
						</Text>
					</motion.div>
				</AnimatePresence>
			)}

			<AnimatePresence>
				{events
					.sort(
						(a, b) => a.startTime.getTime() - b.startTime.getTime(),
					)
					.map((event) => {
						return (
							selectedAudience.includes(event.audience) && (
								<motion.div
									key={event.id}
									initial={{ opacity: 0, x: -25, height: 0 }}
									animate={{
										opacity: 1,
										x: 0,
										height: "auto",
									}}
									exit={{ opacity: 0, x: -25, height: 0 }}
								>
									<Paper mb="sm">
										<Group gap="xs" mb="xs">
											<Title mt={0} mb="0" order={5}>
												{event.name}{" "}
											</Title>
											<Badge
												onClick={() =>
													toggleOneAudience(
														event.audience,
													)
												}
												color={
													audienceColors[
														audiences.indexOf(
															event.audience,
														)
													]
												}
												style={{ cursor: "pointer" }}
											>
												{event.audience}
											</Badge>
										</Group>
										{event.location && (
											<AddToCalendar
												event={{
													title: event.name,
													start: event.startTime,
													end: event.endTime,
													location:
														event.location.address,
												}}
											/>
										)}

										{(event.showDate || event.showTime) && (
											<>
												<Title order={3} mt="xs" mb="0">
													When
												</Title>
												<Title order={6}>
													{event.showDate &&
														event.startTime.toLocaleDateString(
															"en-US",
															{
																weekday: "long",
																year: "numeric",
																month: "long",
																day: "numeric",
																timeZone:
																	"America/New_York",
															},
														)}

													{event.showTime && (
														<>
															<br />
															{event.startTime.toLocaleTimeString(
																"en-US",
																{
																	hour: "numeric",
																	minute: "numeric",
																	timeZone:
																		"America/New_York",
																},
															)}
															{event.endTime && (
																<>
																	&ndash;
																	{event.endTime.toLocaleTimeString(
																		"en-US",
																		{
																			hour: "numeric",
																			minute: "numeric",
																			timeZone:
																				"America/New_York",
																		},
																	)}
																</>
															)}
														</>
													)}
												</Title>
											</>
										)}
										{event.location && (
											<>
												<Title order={3} mt="xs" mb="0">
													Where
												</Title>
												<Title order={6}>
													<address>
														<a
															href={
																event.location
																	.url
															}
															target="_blank"
														>
															{
																event.location
																	.name
															}
															<br />
															{
																event.location
																	.address
															}
														</a>
													</address>
												</Title>
											</>
										)}
										<Text
											mt="xs"
											component={
												typeof event.description ===
												"string"
													? "p"
													: "div"
											}
										>
											{event.description}
										</Text>
									</Paper>
								</motion.div>
							)
						);
					})}
			</AnimatePresence>
		</Container>
	);
};
