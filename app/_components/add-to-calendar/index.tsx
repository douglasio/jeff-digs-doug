"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { type CalendarEvent, google, ics } from "calendar-link";
import styles from "./index.module.css";
import { Group, Button as MantineButton } from "@mantine/core";

interface AddToCalendarProps {
	event: CalendarEvent;
}

interface AddToCalendarButtonProps {
	label: string;
	linkType: "google" | "ics";
}

export const AddToCalendar = ({ event }: AddToCalendarProps) => {
	const url = {
		google: google(event),
		ics: ics(event),
	};

	const Button = ({ label, linkType }: AddToCalendarButtonProps) => (
		<MantineButton
			title={`Add ${event.title} to calendar`}
			onClick={() =>
				window.open(
					url[linkType],
					linkType === "ics" ? "_self" : "_blank",
				)
			}
			size="xs"
			variant="outline"
		>
			<FontAwesomeIcon icon={faCalendarCheck} className={styles.icon} />
			{label}
		</MantineButton>
	);

	return (
		<Group gap="xs">
			<Button label="Apple" linkType="ics" />
			<Button label="Google" linkType="google" />
			<Button label="Others" linkType="ics" />
		</Group>
	);
};
