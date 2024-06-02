import { Image, ImageProps } from "@mantine/core";

const initialsProps = {
	variants: {
		vertical: "vertical",
		horizontal: "horizontal",
	},
	colors: {
		green: "green",
		blue: "blue",
	},
};

type InitialsType = ImageProps & {
	variant?: keyof typeof initialsProps.variants;
	color?: keyof typeof initialsProps.colors;
};

export const Initials = ({
	variant = "vertical",
	color = "green",
	...props
}: InitialsType) => {
	if (variant === initialsProps.variants.vertical) {
		if (color === initialsProps.colors.green) {
			return (
				<Image
					src="static/images/initials_vertical_green.png"
					alt="D&J"
					w="100"
					h="auto"
					pr="lg"
					{...props}
				/>
			);
		} else if (color === initialsProps.colors.blue) {
			return (
				<Image
					src="static/images/initials_vertical_blue.png"
					alt="D&J"
					w="100"
					h="auto"
					pr="lg"
					{...props}
				/>
			);
		}
	} else if (variant === initialsProps.variants.horizontal) {
		if (color === initialsProps.colors.green) {
			return (
				<Image
					src="static/images/initials_horizontal_green.png"
					alt="D&J"
					w="100"
					h="auto"
					pr="lg"
					{...props}
				/>
			);
		} else if (color === initialsProps.colors.blue) {
			return (
				<Image
					src="static/images/initials_horizontal_blue.png"
					alt="D&J"
					w="100"
					h="auto"
					pr="lg"
					{...props}
				/>
			);
		}
	}
};
