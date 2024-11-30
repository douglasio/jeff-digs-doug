"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDisclosure, useIntersection } from "@mantine/hooks";
import { Burger, Flex, Menu } from "@mantine/core";
import { motion } from "motion/react";
import { classNames, SITE_PAGES } from "_util";
import { FONTS } from "_styles";
import { SVG } from "_components";
import classes from "./index.module.css";

type NavProps = {
	className?: string;
	variant?: "inline" | "top";
	showLogo?: boolean;
	containerRef?: IntersectionObserverInit["root"];
};

export const Nav = ({
	className: classNameProp,
	variant = "top",
	showLogo = true,
}: NavProps) => {
	const pathname = usePathname();
	const [opened, { toggle }] = useDisclosure(false);
	const { ref, entry } = useIntersection({ threshold: 1 });

	const isActiveNavLink = (href: string): boolean => {
		return pathname === href;
	};

	return (
		<>
			{/* desktop nav */}
			<Flex
				align="center"
				className={classNames([
					classes.nav,
					variant === "top" && classes.top,
					variant === "top" &&
						!entry?.isIntersecting &&
						classes.isPinned,
					classNameProp,
				])}
				component="nav"
				gap="xs"
				justify={variant === "top" ? "center" : "flex-start"}
				maw="100%"
				p={{ base: "xs", sm: 0 }}
				pos="sticky"
				ref={ref}
				visibleFrom="sm"
			>
				{showLogo && (
					<Link
						href="/home"
						className={classNames([
							classes.logo,
							entry?.isIntersecting && classes.isPinned,
						])}
					>
						<SVG.Initials />
					</Link>
				)}
				{SITE_PAGES.map((page) => (
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
				))}
			</Flex>

			{/* mobile nav */}
			<Flex
				hiddenFrom="sm"
				className={classNames([
					classes.mobileNav,
					variant === "inline" && classes.isInline,
					entry?.isIntersecting && classes.isPinned,
				])}
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
								// opacity: [0, 1, 1],
								rotate: [null, -70, 10],
								y: [null, 60, 100],
								x: [null, 10, 200],
							}}
							transition={{
								duration: 5,
								// type: "linear",
								ease: "easeOut",
								times: [0, 0.5, 1],
								repeat: Infinity,
							}}
							src="/static/images/leafc-06.svg"
						/>
					</Menu.Dropdown>
				</Menu>
			</Flex>
		</>
	);
};
