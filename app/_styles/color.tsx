import { type MantineColorsTuple } from "@mantine/core";

interface ColorsType {
	[key: string]: MantineColorsTuple;
}

export const COLORS: ColorsType = {
	BLUE: [
		"#ecf8fd",
		"#d9edf6",
		"#afdaf0",
		"#82c5ea",
		"#60b4e5",
		"#4eabe2",
		"#42a5e2",
		"#3590c9",
		"#536e7e",
		"#07374F",
	],
	SAGE: [
		"#f3f7eb",
		"#e7ece1",
		"#cfd4c5",
		"#b4bda7",
		"#9da98d",
		"#8f9c7c",
		"#889673",
		"#758260",
		"#677353",
		"#84926E",
	],
	OFF_WHITE: [
		"#fef2f5",
		"#ebe6e6",
		"#cecdcc",
		"#b3b2b1",
		"#9b9a9a",
		"#8c8b8b",
		"#868482",
		"#74716f",
		"#686560",
		"#5e564e",
	],
};
