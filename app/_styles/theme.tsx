"use client";
import { CSSVariablesResolver, createTheme, rem, NavLink } from "@mantine/core";
import { COLORS, FONTS } from "_styles";
import classes from "./theme.module.css";

export const theme = createTheme({
	colors: { blue: COLORS.BLUE, sage: COLORS.SAGE },
	primaryColor: "sage",
	fontFamily: FONTS.BRANDON_GROTESQUE.style.fontFamily,
	fontSizes: {
		xs: rem(13),
		sm: rem(15),
		md: rem(20),
		lg: rem(25),
		xl: rem(30),
	},
	headings: { fontFamily: FONTS.MRS_EAVES.style.fontFamily },
	defaultRadius: "0px",
	components: {
		NavLink: NavLink.extend({
			classNames: { root: classes.navLinkRoot },
		}),
	},
});

export const resolver: CSSVariablesResolver = (theme) => ({
	variables: {
		"--nl-bg": "red",
	},
	light: {
		"--nl-bg": "red",
	},
	dark: {
		"--nl-bg": "red",
	},
});
