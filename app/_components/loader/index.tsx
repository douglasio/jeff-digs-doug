"use client";
import { useState } from "react";
import { LoadingOverlay } from "@mantine/core";
import { useShallowEffect, useTimeout } from "@mantine/hooks";

interface LoaderProps {
	type: "timeout" | "load";
}

export const Loader = ({ type }: LoaderProps) => {
	const [visible, setVisible] = useState(true);
	// eslint-disable-next-line no-unused-vars
	const { start, clear } = useTimeout(() => setVisible(false), 2000);

	useShallowEffect(() => type === "timeout" && start(), []);

	return <LoadingOverlay visible={visible} />;
};
