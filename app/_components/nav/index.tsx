"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	useDebouncedCallback,
	useDisclosure,
	useWindowEvent,
} from "@mantine/hooks";
import { Burger, Button, Flex, Menu } from "@mantine/core";
import { motion } from "motion/react";
import { classNames, mobileNavBreakpoint, SITE_PAGES } from "_util";
import { FONTS } from "_styles";
import { SVG } from "_components";
import classes from "./index.module.css";
import { useState } from "react";

type NavProps = {
	className?: string;
	variant?: "inline" | "top";
	showLogo?: boolean;
};

export const Nav = ({
	className: classNameProp,
	variant = "top",
	showLogo = true,
}: NavProps) => {
	const pathname = usePathname();
	const [opened, { toggle }] = useDisclosure(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const isActiveNavLink = (href: string): boolean => {
		return pathname === href;
	};

	const handleScroll = useDebouncedCallback(() => {
		if (window.scrollY > 0) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	}, 200);

	useWindowEvent("scroll", handleScroll);

	return (
		<>
			{/* desktop nav */}
			<Flex
				align="center"
				className={classNames([
					classes.nav,
					variant === "top" && classes.top,
					variant === "top" && isScrolled && classes.isPinned,
					classNameProp,
				])}
				component="nav"
				gap="xs"
				justify={variant === "top" ? "center" : "flex-start"}
				maw="100%"
				pos="sticky"
				visibleFrom={mobileNavBreakpoint}
			>
				{showLogo && (
					<Link
						href="/home"
						className={classNames([
							classes.logo,
							!isScrolled && classes.isPinned,
						])}
					>
						<SVG.Initials />
					</Link>
				)}
				{SITE_PAGES.map((page) => {
					return page.display === "button" ? (
						<Button
							component={Link}
							key={page.text}
							href={page.url}
						>
							{page.text}
						</Button>
					) : (
						<Link
							key={page.text}
							className={classNames([
								classes.navLink,
								FONTS.BRANDON_GROTESQUE.className,
								isActiveNavLink(page.url) && classes.active,
							])}
							href={page.url}
						>
							{page.text}
						</Link>
					);
				})}
			</Flex>

			{/* mobile nav */}
			<Flex
				hiddenFrom={mobileNavBreakpoint}
				className={classNames([
					classes.mobileNav,
					variant === "inline" && classes.isInline,
					isScrolled && classes.isPinned,
				])}
				pl="md"
				pr="md"
			>
				{/* if showLogo is true and nav is pinned */}
				<Link href="/">
					<SVG.Initials
						className={classNames([
							classes.logo,
							!showLogo && classes.logoHidden,
						])}
						variant="horizontal"
					/>
				</Link>
				{/* <Box className={classes.menu}> */}
				<Menu
					closeOnItemClick={true}
					transitionProps={{
						transition: "pop-top-right",
					}}
					// accessibility for menu mavigations - https://mantine.dev/core/menu/#navigation
					loop={false}
					withinPortal={false}
					trapFocus={false}
					menuItemTabIndex={0}
				>
					<Menu.Target>
						<Burger
							opened={opened}
							onClick={toggle}
							aria-label="Toggle navigation"
							className={classes.burger}
							h="auto"
							p="0"
							flex=""
						/>
					</Menu.Target>
					<Menu.Dropdown
						component="nav"
						className={classes.dropdown}
						h="calc(100vh - var(--mobile-nav-height))"
						w="100%"
						left="0"
						top="var(--mobile-nav-height)"
					>
						{SITE_PAGES.map((page) => (
							<Menu.Item
								component={Link}
								key={page.text}
								className={classNames([
									classes.navLink,
									classes.mobile,
									FONTS.BRANDON_GROTESQUE.className,
									isActiveNavLink(page.url) && classes.active,
								])}
								href={page.url}
							>
								{page.text}
							</Menu.Item>
						))}
						<motion.img
							className={classes.dropdownLeaf}
							initial={{
								// opacity: 0,
								rotate: 10,
								y: -300,
								x: -100,
							}}
							animate={{
								opacity: [0, 0.25, 1],
								rotate: [-10, 0, -30],
								y: [-500, -100, 150],
								x: [200, -200, 150],
							}}
							transition={{
								duration: 1.25,
								ease: "linear",
								times: [0, 0.45, 1],
							}}
							src="/static/images/leafc-06.svg"
						/>
					</Menu.Dropdown>
				</Menu>
			</Flex>
		</>
	);
};
