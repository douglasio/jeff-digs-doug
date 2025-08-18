"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Box, rem } from "@mantine/core";
import { Image, SVG } from "_components";
import { mobileNavBreakpoint } from "_util";

export const HeroImage = () => {
	const [isHeroLoaded, setIsHeroLoaded] = useState(false);

	return (
		<Box pos="relative" w="100%" h="100%">
			<motion.div
				initial={{ opacity: 0.25 }}
				animate={isHeroLoaded ? { y: 0, opacity: 1 } : {}}
				transition={{ duration: 1, ease: "easeOut" }}
				style={{ height: "100%" }}
			>
				<Image
					className="image-dimmed"
					alt="One of our engagement photos on the beach in the DR"
					fit="cover"
					width={1200}
					height={800}
					h={{ base: "100%", [mobileNavBreakpoint]: "100vh" }}
					src="/static/images/webp/engagement_1.webp"
					onLoad={() => setIsHeroLoaded(true)}
					priority
				/>
			</motion.div>
			<Box
				w={{ base: "40%", sm: rem(250) }}
				pos="absolute"
				left="5vw"
				top={{ base: "5%", sm: "10%" }}
			>
				{isHeroLoaded && (
					<SVG.Initials variant="vertical" color="green" animate />
				)}
			</Box>
		</Box>
	);
};

