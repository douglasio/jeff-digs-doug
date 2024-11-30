"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import {
	Timeline as MantineTimeline,
	TimelineItem,
	Text,
	Title,
	Image,
	AspectRatioProps,
	AspectRatio,
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
	active: number;
	events: {
		key: number;
		bullet?: IconProp;
		date: string;
		title: string | React.ReactNode;
		description?: string | React.ReactNode;
		image?: {
			url: string;
			alt: string;
			ratio?: AspectRatioProps["ratio"];
		};
	}[];
};

export const Timeline = ({ events, active }: TimelineProps) => {
	return (
		<MantineTimeline active={active} bulletSize={bulletSize} lineWidth={2}>
			{events.map(
				({ key, bullet, date, title, description, image }, i) => (
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
							initial={i > 0 ? "offscreen" : false}
							whileInView="onscreen"
							viewport={{
								once: true,
								amount: 0.5,
								margin: "50% 0 50px 0",
							}}
							variants={timelineItemVariants}
						>
							<Title order={2}>{title}</Title>
							<Text>{description}</Text>
							{image &&
								(image.ratio ? (
									<AspectRatio ratio={image.ratio}>
										<Image
											alt={image.alt}
											className={classNames([
												"image-dimmed-more",
												classes.timelinePhoto,
											])}
											src={image.url}
										/>
									</AspectRatio>
								) : (
									<Image
										alt={image.alt}
										className={classNames([
											"image-dimmed-more",
											classes.timelinePhoto,
										])}
										src={image.url}
									/>
								))}
						</motion.div>
					</TimelineItem>
				),
			)}
		</MantineTimeline>
	);
};
