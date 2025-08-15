import React from "react";
import { type Variants } from "motion/react";
import * as motion from "motion/react-client";
import {
	Timeline as MantineTimeline,
	TimelineItem,
	Text,
	Title,
} from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Image } from "_components";
import { classNames } from "_util";
import classes from "./index.module.css";

const timelineItemVariants: Variants = {
	offscreen: {
		opacity: 0.1,
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
								margin: "100px",
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
									width={800}
									height={500}
									w="100%"
									h="auto"
									maw={800}
									priority={i === 0 && true}
								/>
							)}
						</motion.div>
					</TimelineItem>
				),
			)}
		</MantineTimeline>
	);
};
