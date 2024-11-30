"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import {
	Timeline as MantineTimeline,
	TimelineItem,
	Text,
	Title,
	Image,
} from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { classNames } from "_util";
import classes from "./index.module.css";

const timelineItemVariants: Variants = {
	offscreen: {
		opacity: 0,
		x: -25,
	},
	onscreen: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1,
			visualDuration: 1,
			ease: "easeOut",
		},
	},
};

const bulletSize = 40;

type TimelineProps = {
	events: {
		key: number;
		bullet?: IconProp;
		date: string;
		title: string;
		description?: string;
		image?: {
			url: string;
			alt: string;
		};
	}[];
};

export const Timeline = ({ events }: TimelineProps) => {
	return (
		<MantineTimeline
			active={events.length - 2}
			bulletSize={bulletSize}
			lineWidth={2}
		>
			{events.map(({ key, bullet, date, title, description, image }) => (
				<TimelineItem
					key={key}
					bullet={
						bullet && (
							<FontAwesomeIcon
								icon={bullet}
								style={{ height: bulletSize - 10 }}
							/>
						)
					}
					className={classes.timelineItem}
					title={date}
				>
					<motion.div
						initial="offscreen"
						whileInView="onscreen"
						viewport={{
							// once: true,
							amount: 0.8,
							margin: "50% 0 50px 0",
						}}
						variants={timelineItemVariants}
					>
						<Title order={2}>{title}</Title>
						<Text>{description}</Text>
						{image && (
							<Image
								alt={image.alt}
								className={classNames([
									"image-dimmed-more",
									classes.timelinePhoto,
								])}
								src={image.url}
							/>
						)}
					</motion.div>
				</TimelineItem>
			))}
		</MantineTimeline>
	);
};
