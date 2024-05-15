"use client";
import Link from "next/link";
import { FONTS } from "_styles/fonts";
import {
	Burger,
	Container,
	Center,
	Anchor,
	Group,
	Image,
	NavLink,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

type Page = {
	text: string;
	url: string;
};

const pages: Page[] = [
	{
		text: "Home",
		url: "/",
	},
	{
		text: "Venue",
		url: "/venue",
	},
	{
		text: "Agenda",
		url: "/agenda",
	},
	{
		text: "Things to Know",
		url: "/things-to-know",
	},
	{
		text: "Wedding Party",
		url: "/wedding-party",
	},
	{
		text: "Our Story",
		url: "/our-story",
	},
];

export const Header = () => {
	const [opened, { toggle }] = useDisclosure();

	return (
		<header className={FONTS.MRS_EAVES.className}>
			<Container component="nav" mt="md" visibleFrom="sm">
				<Group>
					<Image
						src="../static/images/initials_Vertical_1.png"
						alt="D&J"
						w="100"
						h="auto"
						pr="lg"
					/>
					{pages.map((page) => (
						<Anchor
							key={page.text}
							component={Link}
							href={page.url}
							size="lg"
						>
							{page.text}
						</Anchor>
					))}
				</Group>
			</Container>
			<Burger
				opened={opened}
				onClick={toggle}
				aria-label="Toggle navigation"
				hiddenFrom="sm"
			/>
		</header>
	);
};
