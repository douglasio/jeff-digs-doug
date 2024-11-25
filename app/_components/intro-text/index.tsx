import React from "react";
import { Text } from "@mantine/core";

type IntroTextProps = {
	children: React.ReactNode;
};

export const IntroText = ({ children }: IntroTextProps) => (
	<Text fs="italic" size="md" lh="1.2em" w="70%" fw="lighter">
		{children}
	</Text>
);
