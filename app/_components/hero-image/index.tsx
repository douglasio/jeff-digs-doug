"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Box, rem } from "@mantine/core";
import { Image, SVG } from "_components";
import { mobileNavBreakpoint } from "_util";

const blurDataURL =
	"data:image/webp;base64,UklGRsYCAABXRUJQVlA4WAoAAAAgAAAAgAAAVQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg2AAAAJAIAJ0BKoEAVgA+7W6uUKm3KacrU2qC4B2JaW7dW70C/JhJ/J6NmptjXHU7nB1XcimhEgzApl+D/+jGS+iZE2y0qlKV7LmMKMgtf5xAAP7rCGpDHh+u9mrU97S3e9BZXezMCf+t67okZ8wjv6yvmUczPveE2iBYinHM6UNUJhtVffbfhLYKAEVFnUrt7nubsF/6ED+wShOzUVzbw65ayGg/i5o4Q7z+RNR9e28lagoOAZpFgmXaPOvCnRtr3ay9nbnYEv4Rdz7EUk7r97chu3LcLHVANAAAAA==";

export const HeroImage = () => {
	const [isHeroLoaded, setIsHeroLoaded] = useState(false);

	return (
		<Box pos="relative" w="100%" h="100%">
			<motion.div
				initial={{ y: "-25%", opacity: 0.25 }}
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
					placeholder="blur"
					blurDataURL={blurDataURL}
					onLoadingComplete={() => setIsHeroLoaded(true)}
					priority
				/>
			</motion.div>
			<Box
				component={motion.div}
				initial={{ y: "50%", opacity: 0 }}
				animate={isHeroLoaded ? { y: 0, opacity: 1 } : {}}
				transition={{ duration: 1, ease: "easeOut" }}
				w={{ base: "40%", sm: rem(250) }}
				pos="absolute"
				left="5vw"
				top={{ base: "5%", sm: "10%" }}
			>
				<SVG.Initials
					variant="vertical"
					color="green"
					// className={classes.floatingInitials}
				/>
			</Box>
		</Box>
	);
};

