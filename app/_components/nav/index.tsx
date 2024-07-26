"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flex } from "@mantine/core";
import { SITE_PAGES } from "_util";
import classes from "./index.module.css";
import { FONTS } from "_styles";

export const Nav = () => {
	const pathname = usePathname();

	const isActiveNavLink = (href: string): boolean => {
		return pathname === href;
	};

	return (
		<Flex align="end" h="5rem" component="nav" gap="xs" maw="100%">
			{SITE_PAGES.map((page) => (
				<Link
					key={page.text}
					className={[
						classes.navLink,
						FONTS.BRANDON_GROTESQUE.className,
						isActiveNavLink(page.url) && classes.active,
					].join(" ")}
					href={page.url}
				>
					{page.text}
				</Link>
			))}
		</Flex>
	);
};
