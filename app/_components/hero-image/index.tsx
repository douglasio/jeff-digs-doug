"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Box, rem } from "@mantine/core";
import { Image, SVG } from "_components";
import { mobileNavBreakpoint } from "_util";

export const HeroImage = () => {
	const [isHeroLoaded, setIsHeroLoaded] = useState(false);

	return (
		<Box
			pos="relative"
			w="100%"
			h={{ base: "60vh", [mobileNavBreakpoint]: "100vh" }}
		>
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
					h="100%"
					src="/static/images/webp/wedding-walking-outside.webp"
					onLoad={() => setIsHeroLoaded(true)}
					style={{ objectPosition: "top center" }}
					priority
				/>
			</motion.div>
			<Box
				w={{ base: "30%", sm: rem(200) }}
				pos="absolute"
				right={{ base: "10vw", sm: "5vw" }}
				top="3%"
			>
				{isHeroLoaded && (
					<SVG.Initials variant="vertical" color="green" animate />
				)}
			</Box>
		</Box>
	);
};

