"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import {
	Box,
	Burger,
	Container,
	Flex,
	Menu,
	NavLink,
	Stack,
	rem,
} from "@mantine/core";
import { SITE_PAGES } from "_util";
import classes from "./index.module.css";
import { FONTS } from "_styles";

export const Nav = () => {
	const pathname = usePathname();
	const [opened, { toggle }] = useDisclosure(false);

	const isActiveNavLink = (href: string): boolean => {
		return pathname === href;
	};

	return (
		<>
			{/* desktop nav */}
			<Flex
				align="end"
				h="5rem"
				component="nav"
				gap="xs"
				maw="100%"
				pos="absolute"
				visibleFrom="sm"
				top="0"
			>
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
			{/* mobile nav */}
			<Box className={classes.menu} hiddenFrom="sm">
				<Menu
					closeOnItemClick={true}
					position="left-start"
					transitionProps={{
						transition: "pop-top-right",
					}}
				>
					<Menu.Target>
						<Burger
							opened={opened}
							onClick={toggle}
							aria-label="Toggle navigation"
						/>
					</Menu.Target>
					<Menu.Dropdown component="nav" w="45%">
						{SITE_PAGES.map((page) => (
							<Menu.Item
								component={Link}
								key={page.text}
								className={[
									classes.navLink,
									classes.mobile,
									FONTS.BRANDON_GROTESQUE.className,
									isActiveNavLink(page.url) && classes.active,
								].join(" ")}
								href={page.url}
							>
								{page.text}
							</Menu.Item>
						))}
					</Menu.Dropdown>
				</Menu>
			</Box>
		</>
	);
};
