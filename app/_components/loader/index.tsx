"use client";
import { useState, useEffect } from "react";
import { Image, LoadingOverlay, Transition } from "@mantine/core";
import { useShallowEffect, useTimeout } from "@mantine/hooks";
import classes from "./index.module.css";
import { COLORS } from "_styles";
interface LoaderProps {
	type: "timeout" | "load";
}

export const Loader = ({ type }: LoaderProps) => {
	const [visible, setVisible] = useState(true);
	const { start, clear } = useTimeout(() => setVisible(false), 2000);
	useShallowEffect(() => start(), []);

	return <LoadingOverlay visible={visible} />;
};
