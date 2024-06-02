"use client";
import {
	createTheme,
	rem,
	NavLink,
	Input,
	Overlay,
	LoadingOverlay,
	Image,
	Modal,
	Title,
	Button,
} from "@mantine/core";
import { COLORS, FONTS } from "_styles";
import classes from "./theme.module.css";

export const theme = createTheme({
	colors: { blue: COLORS.BLUE, sage: COLORS.SAGE },
	primaryColor: "sage",
	fontFamily: FONTS.BRANDON_GROTESQUE.style.fontFamily,
	fontSizes: {
		xs: rem(15),
		sm: rem(20),
		md: rem(25),
		lg: rem(30),
		xl: rem(35),
	},
	spacing: {
		xs: rem(15),
		sm: rem(20),
		md: rem(30),
		lg: rem(40),
		xl: rem(50),
	},
	headings: {
		fontFamily: FONTS.MRS_EAVES.style.fontFamily,
		fontWeight: "500",
		sizes: {
			h1: {
				fontSize: rem(60),
				lineHeight: "1",
			},
			h2: {
				fontSize: rem(35),
				lineHeight: "1",
			},
		},
	},
	defaultRadius: "0px",
	components: {
		Button: Button.extend({
			classNames: { root: classes.buttonRoot },
		}),
		NavLink: NavLink.extend({
			classNames: { root: classes.navLinkRoot },
		}),
		Input: Input.extend({
			classNames: { input: classes.input, wrapper: classes.inputWrapper },
			defaultProps: {
				size: "xl",
			},
		}),
		Modal: Modal.extend({
			classNames: { body: classes.modalBody },
			defaultProps: {
				transitionProps: { transition: "fade", duration: 500 },
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
							src="static/images/initials_horizontal_green.png"
							className={classes.loaderSpin}
						/>
					),
				},
				transitionProps: { transition: "fade", duration: 500 },
			},
		}),
		Title: Title.extend({
			classNames: {
				root: classes.title,
			},
		}),
	},
});
