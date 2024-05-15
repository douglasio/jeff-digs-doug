"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLink, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { SITE_PAGES } from "_util";
import classes from "./index.module.css";

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

export const Nav = () => {
	const [opened, { toggle }] = useDisclosure();
	const pathname = usePathname();

	const isActiveNavLink = (href: string): boolean => {
		return pathname === href;
	};

	return (
		<Stack align="flex-end" component="nav" gap="xs">
			{SITE_PAGES.map((page) => (
				<NavLink
					key={page.text}
					active={isActiveNavLink(page.url)}
					className={classes.navLink}
					label={page.text}
					component={Link}
					href={page.url}
				/>
			))}
		</Stack>
	);
};
