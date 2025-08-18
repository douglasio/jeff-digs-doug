import { default as NextImage } from "next/image";
import { Image as MantineImage } from "@mantine/core";

// combination of NextImage and MantineImage

export const Image = ({ ...props }) => {
	return (
		<MantineImage alt="" component={NextImage} quality={95} {...props} />
	);
};

