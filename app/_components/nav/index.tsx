"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDisclosure, useIntersection } from "@mantine/hooks";
import { Burger, Flex, Menu } from "@mantine/core";
import { classNames, SITE_PAGES } from "_util";
import { FONTS } from "_styles";
import { SVG } from "_components";
import classes from "./index.module.css";

type NavProps = {
	variant?: "inline" | "top";
	showLogo?: boolean;
	containerRef?: IntersectionObserverInit["root"];
};

export const Nav = ({ variant = "top", showLogo }: NavProps) => {
	const pathname = usePathname();
	const [opened, { toggle }] = useDisclosure(false);
	const { ref, entry } = useIntersection({
		threshold: 1,
	});

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
					variant === "top" &&
						entry?.isIntersecting &&
						classes.isUnpinned,
				])}
				component="nav"
				gap="xs"
				justify={variant === "top" ? "center" : "flex-start"}
				maw="100%"
				p="xs"
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
			<Flex hiddenFrom="sm" className={classes.mobileNav}>
				<Link href="/">
					<SVG.Initials
						className={classes.logo}
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
						h="calc(100vh - 3rem)"
						w="100%"
						left="0"
						top="3rem"
					>
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
				{/* </Box> */}
			</Flex>
		</>
	);
};
