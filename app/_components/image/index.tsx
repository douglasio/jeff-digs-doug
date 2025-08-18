import { default as NextImage } from "next/image";
import { Image as MantineImage } from "@mantine/core";
import { blurDataURL } from "_util";

// combination of NextImage and MantineImage

export const Image = ({ ...props }) => {
	return (
		<MantineImage
			alt=""
			component={NextImage}
			quality={95}
			placeholder="blur"
			blurDataURL={blurDataURL}
			{...props}
		/>
	);
};

