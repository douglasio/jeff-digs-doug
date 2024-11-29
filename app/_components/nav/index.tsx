"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDisclosure, useIntersection } from "@mantine/hooks";
import { Box, Burger, Flex, Menu } from "@mantine/core";
import { classNames, SITE_PAGES } from "_util";
import { FONTS } from "_styles";
import { SVG } from "_components";
import classes from "./index.module.css";

type NavProps = {
	center?: boolean;
	showLogo?: boolean;
};

export const Nav = ({ center, showLogo }: NavProps) => {
	const pathname = usePathname();
	const [opened, { toggle }] = useDisclosure(false);
	const { ref, entry } = useIntersection({
		root: document.querySelector("#root"),
		threshold: 1,
	});

	const isActiveNavLink = (href: string): boolean => {
		return pathname === href;
	};

	return (
		<>
			{/* desktop nav */}
			<Flex
				align="end"
				className={classNames([
					classes.nav,
					!entry?.isIntersecting && classes.isPinned,
				])}
				component="nav"
				gap="xs"
				h="5.5rem"
				justify={center ? "center" : "flex-start"}
				maw="100%"
				ref={ref}
				visibleFrom="sm"
			>
				{showLogo && (
					<Link href="/home" className={classes.logo}>
						<SVG.Initials />
					</Link>
				)}
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
