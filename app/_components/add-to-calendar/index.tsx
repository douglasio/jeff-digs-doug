"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { type CalendarEvent, google, ics } from "calendar-link";
import { Group, Button as MantineButton } from "@mantine/core";
import classes from "./index.module.css";

interface AddToCalendarProps {
	event: CalendarEvent;
}

interface AddToCalendarButtonProps {
	label: string;
	linkType: "google" | "ics";
}

export const AddToCalendar = ({ event }: AddToCalendarProps) => {
	const googleUrl = google(event);
	const icsUrl = ics(event);

	const url = {
		google: googleUrl,
		ics: icsUrl,
	};

	const Button = ({ label, linkType }: AddToCalendarButtonProps) => (
		<MantineButton
			component="a"
			download={linkType === "ics" ? "calendar.ics" : false}
			href={url[linkType]}
			target={linkType === "ics" ? "_self" : "_blank"}
			title={`Add ${event.title} to calendar`}
			size="xs"
			variant="outline"
		>
			<FontAwesomeIcon icon={faCalendarCheck} className={classes.icon} />
			{label}
		</MantineButton>
	);

	return (
		<Group gap="xs">
			<Button label="Add to calendar" linkType="ics" />
			<Button label="Add to Google calendar" linkType="google" />
		</Group>
	);
};
