"use client";
import {
	createTheme,
	rem,
	NavLink,
	Input,
	Overlay,
	LoadingOverlay,
	Image,
} from "@mantine/core";
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
	headings: {
		fontFamily: FONTS.MRS_EAVES.style.fontFamily,
	},
	defaultRadius: "0px",
	components: {
		NavLink: NavLink.extend({
			classNames: { root: classes.navLinkRoot },
		}),
		Input: Input.extend({
			classNames: { input: classes.input, wrapper: classes.inputWrapper },
			defaultProps: {
				size: "xl",
			},
		}),
		Overlay: Overlay.extend({
			defaultProps: {
				blur: 7,
				color: COLORS.BLUE[8],
			},
		}),
		LoadingOverlay: LoadingOverlay.extend({
			defaultProps: {
				overlayProps: { blur: 7, color: COLORS.BLUE[8] },
				loaderProps: {
					children: (
						<Image
							alt="Loading..."
							src="static/images/initials_Horizontal_green.png"
							className={classes.loaderSpin}
						/>
					),
				},
				transitionProps: { transition: "fade", duration: 500 },
			},
		}),
	},
});
