"use client";
import {
	Accordion,
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
	Autocomplete,
	Text,
	Grid,
	Menu,
} from "@mantine/core";
import { COLORS, FONTS } from "_styles";
import classes from "./theme.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// const variantColorResolver: VariantColorsResolver = (input) => {
// 	const defaultResolvedColors = defaultVariantColorsResolver(input);
// 	const parsedColor = parseThemeColor({
// 		color: input.color || input.theme.primaryColor,
// 		theme: input.theme,
// 	});

// 	// Override some properties for variant
// 	// if (
// 	// 	parsedColor.isThemeColor &&
// 	// 	parsedColor.color === "sage" &&
// 	// 	input.variant === "outline"
// 	// ) {
// 	// 	return {
// 	// 		...defaultResolvedColors,
// 	// 		color: "var(--mantine-color-black)",
// 	// 		// hoverColor: "var(--mantine-color-black)",
// 	// 	};
// 	// }

// 	// Completely override variant
// 	// if (input.variant === "outline") {
// 	// 	return {
// 	// 		background: "transparent",
// 	// 		hover: input.theme.primaryColor,
// 	// 		border: input.theme.primaryColor,
// 	// 		color: input.theme.primaryColor,
// 	// 	};
// 	// }

// 	return defaultResolvedColors;
// };

export const theme = createTheme({
	colors: { blue: COLORS.BLUE, sage: COLORS.SAGE, navy: COLORS.NAVY },
	// variantColorResolver,
	primaryColor: "sage",
	fontFamily: FONTS.BRANDON_GROTESQUE.style.fontFamily,
	fontSizes: {
		xs: rem(20),
		sm: rem(25),
		md: rem(35),
		lg: rem(55),
		xl: rem(75),
	},
	spacing: {
		xs: rem(15),
		sm: rem(30),
		md: rem(50),
		lg: rem(70),
		xl: rem(100),
	},
	headings: {
		fontFamily: FONTS.BRANDON_GROTESQUE.style.fontFamily,
		fontWeight: "500",
		sizes: {
			h1: {
				fontSize: rem(60),
				lineHeight: "1",
			},
			h2: {
				fontSize: rem(35),
				lineHeight: "1.25",
				fontWeight: "400",
			},
			h4: {
				fontSize: rem(35),
			},
		},
	},
	defaultRadius: "0px",
	components: {
		Accordion: Accordion.extend({
			classNames: {
				panel: classes.accordionPanel,
				control: classes.accordionControl,
				content: classes.accordionContent,
				chevron: classes.accordionChevron,
				root: classes.accordionRoot,
				item: classes.accordionItem,
				label: classes.accordionLabel,
			},
			defaultProps: {
				mb: "sm",
				chevronSize: "2rem",
				chevron: <FontAwesomeIcon icon={faChevronDown} />,
			},
		}),
		Autocomplete: Autocomplete.extend({
			classNames: {
				dropdown: classes.autocompleteDropdown,
				option: classes.autocompleteOption,
			},
		}),
		Button: Button.extend({
			classNames: { root: classes.buttonRoot },
		}),
		Grid: Grid.extend({
			classNames: { inner: classes.gridInner },
		}),
		NavLink: NavLink.extend({
			classNames: { root: classes.navLinkRoot },
			defaultProps: {
				fs: "italic",
				fw: 300,
			},
		}),
		Input: Input.extend({
			classNames: { input: classes.input, wrapper: classes.inputWrapper },
			defaultProps: {
				size: "xl",
			},
		}),
		Menu: Menu.extend({
			classNames: {
				dropdown: classes.menuDropdown,
				item: classes.menuItem,
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
		Text: Text.extend({
			defaultProps: {
				fw: "300",
				lh: "1.3em",
				size: "sm",
			},
		}),
		Title: Title.extend({
			classNames: {
				root: classes.title,
			},
		}),
	},
});
