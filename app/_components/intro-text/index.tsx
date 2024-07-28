import React from "react";
import { Text } from "@mantine/core";

type IntroTextProps = {
	children: React.ReactNode;
};

export const IntroText = ({ children }: IntroTextProps) => (
	<Text fs="italic" size="md" lh="sm" w="70%">
		{children}
	</Text>
);
