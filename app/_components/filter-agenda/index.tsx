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
	Image,
	Table,
	TableTbody,
	TableTr,
	TableTd,
} from "@mantine/core";
import { AnimatePresence, motion } from "motion/react";
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
	hotel: {
		name: "The Cove Hotel",
		address: "40 Bridge St, Salem, MA",
		url: "https://maps.app.goo.gl/YHx34hUsnTFJnJhF9",
	},
};

type AudienceType = (typeof audiences)[number];

type EventType = {
	id: number;
	name: string;
	date: string;
	startTime: string;
	endTime: string;
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
		id: 7,
		name: "Wedding Party & VIP Dinner",
		date: "November 7, 2025",
		startTime: "5:00 PM",
		endTime: "6:00 PM",
		location: locations.deacongiles,
		description: (
			<>
				There&rsquo;s no rehearsal,{" "}
				<a
					href="https://www.youtube.com/watch?v=vu2NK5REvWM"
					target="_blank"
				>
					we&rsquo;ll do it live!
				</a>{" "}
				But the wedding party will still gather at Deacon Giles on the
				eve of the big day to enjoy food and drinks on us before other
				guests arrive.
			</>
		),
		audience: "Wedding Party",
		showDate: true,
		showTime: true,
	},
	{
		id: 3,
		name: "Welcome Drinks",
		date: "November 7, 2025",
		startTime: "7:00 PM",
		endTime: "9:00 PM",
		location: locations.deacongiles,
		description: (
			<>
				If you&rsquo;re in town early, please join us following our
				rehearsal dinner for a welcome beverage (or three) on us!
				Seriously, we&rsquo;ve got minimums to hit. Hope you
				RSVP&rsquo;d yes!
			</>
		),
		audience: "Guests",
		showDate: true,
		showTime: true,
	},
	{
		id: 1,
		name: "Doug & Jeff Arrive at the Venue",
		date: "November 8, 2025",
		startTime: "2:00 PM",
		endTime: "2:30 PM",
		// location: locations.willowdale,
		audience: "The Couple",
		showDate: true,
		showTime: true,
	},
	{
		id: 3431,
		name: "Pre-Ceremony Photos",
		date: "November 8, 2025",
		startTime: "2:30 PM",
		endTime: "4:00 PM",
		location: locations.willowdale,
		description:
			"For the couple, wedding party members, and VIPs, please arrive at Willowdale early for getting ready and photos.",
		audience: "Wedding Party",
		showDate: true,
		showTime: true,
	},
	{
		id: 431234,
		name: "Guest Shuttle Pickup",
		date: "November 8, 2025",
		startTime: "3:20 PM",
		endTime: "3:30 PM",
		location: locations.hotel,
		description:
			"Transportation is available to the ceremony/reception venue for those staying in Salem, departing promptly at 3:30 P.M.",
		audience: "Guests",
		showDate: true,
		showTime: true,
	},
	{
		id: 2,
		name: "Guest Arrival",
		date: "November 8, 2025",
		startTime: "4:00 PM",
		endTime: "4:30 PM",
		location: locations.willowdale,
		description:
			"Guests may arrive, grab a welcome liquid, and take their seats as directed by venue staff.",
		audience: "Guests",
		showDate: true,
		showTime: true,
	},
	{
		id: 24,
		name: "Ceremony",
		date: "November 8, 2025",
		startTime: "4:30 PM",
		endTime: "5:00 PM",
		location: locations.willowdale,
		description: "Get ready to cry.",
		audience: "Guests",
		showDate: true,
		showTime: true,
	},
	{
		id: 5,
		name: "Reception",
		date: "November 8, 2025",
		startTime: "5:00 PM",
		endTime: "11:00 PM",
		location: locations.willowdale,
		description: (
			<>
				<Text>
					The reception agenda is subject to change, but here&rsquo;s
					about what you can expect:
				</Text>
				<Table withColumnBorders>
					<TableTbody>
						<TableTr>
							<TableTd w="10rem">5:00 P.M.</TableTd>
							<TableTd>Cocktail hour</TableTd>
						</TableTr>
						<TableTr>
							<TableTd>6:30 P.M.</TableTd>
							<TableTd>
								Dinner and a Show: <br />
								The Roast (and Toasts) of Doug & Jeff
							</TableTd>
						</TableTr>
						<TableTr>
							<TableTd>8:00 P.M.</TableTd>
							<TableTd>Category is: Dance or Die</TableTd>
						</TableTr>
						<TableTr>
							<TableTd>10:00 P.M.</TableTd>
							<TableTd>Late-Night Snack</TableTd>
						</TableTr>
						<TableTr>
							<TableTd>10:30 P.M.</TableTd>
							<TableTd>Last Call</TableTd>
						</TableTr>
						<TableTr>
							<TableTd>11:00 P.M.</TableTd>
							<TableTd>The End...?</TableTd>
						</TableTr>
					</TableTbody>
				</Table>
			</>
		),
		audience: "Guests",
		showDate: true,
		showTime: true,
	},
	{
		id: 4545452331234,
		name: "Guest Shuttle Departs",
		date: "November 8, 2025",
		startTime: "11:00 PM",
		endTime: "11:10 PM",
		audience: "Guests",
		showDate: true,
		showTime: true,
	},
	{
		id: 8,
		name: "Live Happily Ever After",
		date: "November 9, 2025",
		startTime: "5:00 PM",
		endTime: "6:00 PM",
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
				{events.map((event) => {
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
								<Paper
									mb="sm"
									bd={
										event.audience === "Guests"
											? `1px solid ${COLORS.SAGE[3]}`
											: "none"
									}
								>
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
												start: `${event.date} ${event.startTime}`,
												end: `${event.date} ${event.endTime}`,
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
												{event.showDate && event.date}

												{event.showTime && (
													<>
														<br />
														{event.startTime}
														{event.endTime && (
															<>
																&ndash;
																{event.endTime}
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
															event.location.url
														}
														target="_blank"
													>
														{event.location.name}
														<br />
														{event.location.address}
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
