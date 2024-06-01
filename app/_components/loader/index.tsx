"use client";

import { useState } from "react";
import { LoadingOverlay } from "@mantine/core";
import { useShallowEffect, useTimeout } from "@mantine/hooks";

interface LoaderProps {
	onComplete?: () => void;
	showOnce?: boolean;
	type: "timeout" | "load";
}

export const Loader = ({ showOnce = false, onComplete, type }: LoaderProps) => {
	const [visible, setVisible] = useState(true);
	// eslint-disable-next-line no-unused-vars

	const { start, clear } = useTimeout(() => {
		setVisible(false);
		onComplete && onComplete();
	}, 1500);

	useShallowEffect(() => type === "timeout" && start(), []);

	return <LoadingOverlay visible={visible} />;
};
