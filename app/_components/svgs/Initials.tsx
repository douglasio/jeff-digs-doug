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

enum INITIALS_IMAGE_SRC {
	VERTICAL_GREEN = "../static/images/initials_vertical_green.png",
	VERTICAL_BLUE = "../static/images/initials_vertical_blue.png",
	HORIZONTAL_GREEN = "../static/images/initials_horiztonal_green.png",
	HORIZONTAL_BLUE = "../static/images/initials_horiztonal_blue.png",
}

export const Initials = ({
	variant = "vertical",
	color = "green",
	...props
}: InitialsType) => {
	let imageSrc;

	if (variant === initialsProps.variants.vertical) {
		if (color === initialsProps.colors.green) {
			imageSrc = INITIALS_IMAGE_SRC.VERTICAL_GREEN;
		} else if (color === initialsProps.colors.blue) {
			imageSrc = INITIALS_IMAGE_SRC.VERTICAL_BLUE;
		}
	} else if (variant === initialsProps.variants.horizontal) {
		if (color === initialsProps.colors.green) {
			imageSrc = INITIALS_IMAGE_SRC.HORIZONTAL_GREEN;
		} else if (color === initialsProps.colors.blue) {
			imageSrc = INITIALS_IMAGE_SRC.HORIZONTAL_BLUE;
		}
	}

	return (
		<Image src={imageSrc} alt="D&J" w="100" h="auto" pr="lg" {...props} />
	);
};
