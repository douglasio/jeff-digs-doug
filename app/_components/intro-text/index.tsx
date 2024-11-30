import React from "react";
import { Text, type TextProps } from "@mantine/core";

type IntroTextProps = TextProps & {
	children: React.ReactNode;
};

export const IntroText = ({ children, ...props }: IntroTextProps) => (
	<Text
		fs="italic"
		size="md"
		lh="1.2em"
		w={{ base: "auto", sm: "80%" }}
		fw="lighter"
		{...props}
	>
		{children}
	</Text>
);
