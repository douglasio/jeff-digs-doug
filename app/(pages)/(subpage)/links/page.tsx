import React from "react";
import { Metadata } from "next";
import { Button, SimpleGrid, Space, Title } from "@mantine/core";
import { FONTS } from "_styles";
import { IntroText } from "_components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowUpRightFromSquare,
	faBookOpen,
	faChair,
	faMartiniGlassCitrus,
} from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-regular-svg-icons";

export const metadata: Metadata = {
	title: "Links",
	description: "All the links you need for the day-of.",
};

const links = [
	{
		id: 1,
		title: "Program",
		url: "https://www.canva.com/design/DAG2Fy46Kio/tOfDGxqRwCsxv-NW9lru5w/edit?utm_content=DAG2Fy46Kio&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
		icon: faBookOpen,
	},
	{
		id: 2,
		title: "Seating",
		url: "https://www.canva.com/design/DAG3CUf3mEc/x-x4AGL1p9QvAh7vFzM8MA/edit?utm_content=DAG3CUf3mEc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
		icon: faChair,
	},
	{
		id: 4,
		title: "Signature Cocktails",
		url: "https://www.canva.com/design/DAG2jXJm-F4/M6h2J0rrnDv-3k6rB35O8g/edit?utm_content=DAG2jXJm-F4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
		icon: faMartiniGlassCitrus,
	},
	{
		id: 3,
		title: "Guest Photos, Voice Messages, and Guest Book",
		url: "https://weduploader.com/upload/sO2CpfOIfmDK3KpZ",
		icon: faCamera,
	},
];

const Links = () => {
	return (
		<>
			{/* need a spacer if there's no grid */}
			<Space h="sm" />
			<Title className={FONTS.MRS_EAVES.className} order={1}>
				Links
			</Title>
			<IntroText>
				All the links you need for the day-of in one convenient page.
			</IntroText>
			<SimpleGrid cols={{ base: 1, md: 3 }}>
				{links.map((link) => (
					<Button
						key={link.id}
						component="a"
						href={link.url}
						target="_blank"
						leftSection={
							<FontAwesomeIcon
								icon={link.icon}
								style={{ width: "1.5rem" }}
							/>
						}
						rightSection={
							<FontAwesomeIcon
								icon={faArrowUpRightFromSquare}
								style={{ width: "1rem" }}
							/>
						}
					>
						{link.title}
					</Button>
				))}
			</SimpleGrid>
		</>
	);
};

export default Links;

