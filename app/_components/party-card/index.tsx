import React, { type ReactNode } from "react";
import * as motion from "motion/react-client";
import {
	AspectRatio,
	Card,
	CardSection,
	List,
	ListItem,
	Text,
	Title,
	type CardProps,
} from "@mantine/core";
import { Image, SVG } from "_components";

type PartyCardProps = CardProps & {
	name: string;
	image: {
		src: string;
		alt: string;
	};
	description: {
		intro: string | ReactNode;
		rose: string | ReactNode;
		bud: string | ReactNode;
		thorn: string | ReactNode;
	};
	index?: number;
};

export const PartyCard = ({
	name,
	image,
	description,
	index,
	...props
}: PartyCardProps) => {
	return (
		<motion.div
			initial="offscreen"
			whileInView="onscreen"
			viewport={{
				once: true,
				amount: 0.5,
				margin: "50px",
			}}
			variants={{
				offscreen: {
					opacity: 0.1,
					y: 25,
				},
				onscreen: {
					opacity: 1,
					y: 0,
					transition: {
						delay: index ? index / 7 : 0,
						duration: 1,
						visualDuration: 1,
						ease: "easeOut",
					},
				},
			}}
		>
			<Card {...props}>
				<CardSection
					mb="xs"
					className="image-container-warm-ice"
					mih={{ base: 400, sm: 300 }}
					mt="-1rem"
				>
					<Image src={image.src} alt={image.alt} fill />
				</CardSection>
				<Title order={3} size="md">
					{name}
				</Title>
				<Text>{description.intro}</Text>
				<List size="xs">
					<ListItem
						icon={<SVG.Rose style={{ marginTop: "0.25em" }} />}
					>
						{description.rose}
					</ListItem>
					<ListItem
						icon={<SVG.Bud style={{ marginTop: "0.25em" }} />}
					>
						{description.bud}
					</ListItem>
					<ListItem
						icon={<SVG.Thorn style={{ marginTop: "0.25em" }} />}
					>
						{description.thorn}
					</ListItem>
				</List>
			</Card>
		</motion.div>
	);
};
