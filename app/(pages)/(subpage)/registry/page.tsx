import React from "react";
import { Metadata } from "next";
import { Image, IntroText, RegistryComponent } from "_components";
import { Box, Center, Space, Text, Title } from "@mantine/core";
import { FONTS } from "_styles";
import { mobileNavBreakpoint } from "_util";
import {} from "_components/registry";

export const metadata: Metadata = {
	title: "Registry",
	description: "It’s not about the money, except on this page where it is.",
};

const Registry = () => {
	return (
		<>
			{/* need a spacer if there's no grid */}
			<Space h="sm" />
			<Title className={FONTS.MRS_EAVES.className} order={1}>
				Registry
			</Title>
			<IntroText>
				Imagine no possessions, it&rsquo;s easy if you try. Money, on
				the other hand...
			</IntroText>
			<Text w={{ base: "100%", [mobileNavBreakpoint]: "80%" }}>
				While we aren&rsquo;t in the market for many worldly possessions
				right now, if you&rsquo;d like to offer something in celebration
				of our union, we will graciously accept your contribution to one
				of the gift packages below!
			</Text>
			<RegistryComponent />
			<Center mt="xl">
				<Box
					component="a"
					className="image-container-warm-ice image-dimmed-more"
					href="https://www.youtube.com/clip/Ugkx-t3bIAdQUh6POBj2H09V8IfXaii-oGh7"
					target="_blank"
					w="100%"
					maw="1200"
					h="auto"
				>
					<Image
						src="/static/images/webp/money-please.webp"
						width="1200"
						height="618"
						h="auto"
						alt="Mona Lisa from Parks and Recreation saying 'Money please!'"
						ml="auto"
					/>
				</Box>
			</Center>
		</>
	);
};

export default Registry;
