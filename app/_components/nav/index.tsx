"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLink, Stack } from "@mantine/core";
import { SITE_PAGES } from "_util";
import classes from "./index.module.css";

export const Nav = () => {
	const pathname = usePathname();

	const isActiveNavLink = (href: string): boolean => {
		return pathname === href;
	};

	return (
		<Stack align="flex-end" component="nav" gap="0">
			{SITE_PAGES.map((page) => (
				<NavLink
					key={page.text}
					active={isActiveNavLink(page.url)}
					className={classes.navLink}
					label={page.text}
					component={Link}
					href={page.url}
					variant="subtle"
				/>
			))}
		</Stack>
	);
};
