"use client";

import { type ReactNode, useState } from "react";
import { Badge, Chip, Group, Paper, Space, Text, Title } from "@mantine/core";
import { AnimatePresence, motion } from "motion/react";

const audiences = [
	"Everyone",
	"Guests",
	"Wedding Party",
	"The Couple",
] as const;

type AudienceType = (typeof audiences)[number];

type EventType = {
	id: number;
	name: string;
	startTime: Date;
	endTime: Date;
	description?: ReactNode | string;
	audience: AudienceType;
}[];

const events: EventType = [
	{
		id: 1,
		name: "Rehearsal Dinner",
		startTime: new Date("2025-10-08"),
		endTime: new Date("2025-10-08"),
		description: "Sample description",
		audience: "Wedding Party",
	},
	{
		id: 2,
		name: "Ceremony",
		startTime: new Date("2025-11-08"),
		endTime: new Date("2025-11-08"),
		description: "Sample description",
		audience: "Guests",
	},
	{
		id: 3,
		name: "Die",
		startTime: new Date("2025-11-08"),
		endTime: new Date("2025-11-08"),
		description: "Sample description",
		audience: "The Couple",
	},
	{
		id: 4,
		name: "Test",
		startTime: new Date("2025-11-08"),
		endTime: new Date("2025-11-08"),
		description: "Sample description",
		audience: "Everyone",
	},
	{
		id: 5,
		name: "First",
		startTime: new Date("2025-11-03"),
		endTime: new Date("2025-11-08"),
		description: "Sample description",
		audience: "Guests",
	},
];

export const FilterAgenda = () => {
	const [selectedAudience, setSelectedAudience] = useState<AudienceType[]>([
		...audiences,
	]);

	const toggleAudience = (audience: AudienceType) => {
		if (selectedAudience.includes(audience)) {
			setSelectedAudience(selectedAudience.filter((a) => a !== audience));
		} else {
			setSelectedAudience([...selectedAudience, audience]);
		}
	};

	const toggleOneAudience = (audience: AudienceType) => {
		setSelectedAudience([audience]);
	};

	return (
		<>
			<Group gap="xs">
				{audiences.map((audience, i) => {
					const isSelected = selectedAudience.includes(audience);
					return (
						<Chip
							key={`${audience}${i}`}
							checked={isSelected}
							onClick={() => toggleAudience(audience)}
						>
							{audience}
						</Chip>
					);
				})}
			</Group>

			<Space h="md" />

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
					// .sort(
					// 	(a, b) => (a.startTime - b.startTime)
					// )
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
										<Title order={3}>
											{event.startTime.toLocaleDateString(
												"en-US",
												{
													weekday: "long",
													year: "numeric",
													month: "long",
													day: "numeric",
												},
											)}{" "}
											{event.name}
										</Title>
										<Text>{event.description}</Text>

										<Badge
											onClick={() =>
												toggleOneAudience(
													event.audience,
												)
											}
										>
											{event.audience}
										</Badge>
									</Paper>
								</motion.div>
							)
						);
					})}
			</AnimatePresence>
		</>
	);
};
