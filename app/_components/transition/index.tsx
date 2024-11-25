"use client";
import React, { useState } from "react";
import {
	Transition as MantineTransition,
	type TransitionProps as MantineTransitionProps,
} from "@mantine/core";

type TransitionProps = {
	content: React.ReactNode;
	autoMount?: boolean;
	mounted?: MantineTransitionProps["mounted"];
	delay?: number;
} & MantineTransitionProps;

export const Transition = ({
	content,
	autoMount = true,
	delay = 1000,
	duration = 500,
	mounted = false,
	...props
}: TransitionProps) => {
	const [mountedState, setMountedState] = useState(mounted);
	autoMount && setTimeout(() => setMountedState(true), delay);

	return (
		<MantineTransition
			mounted={mountedState}
			duration={duration}
			{...props}
		>
			{(styles) => <div style={styles}>{content}</div>}
		</MantineTransition>
	);
};
