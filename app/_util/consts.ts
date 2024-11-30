/* eslint-disable no-unused-vars */
import { GridColProps } from "@mantine/core";
import states from "states-us";

// array of state names - used in forms / validations
export const stateNames = states.map((state) => state.name);

export const HUBSPOT = {
	PORTAL_ID: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID,
	FORM_ID: {
		INTAKE_FORM: process.env.NEXT_PUBLIC_HUBSPOT_INTAKE_FORM_ID,
	},
	SUBMIT_ENDPOINT: process.env.NEXT_PUBLIC_HUBSPOT_FORM_SUBMIT_ENDPOINT,
};

export const WEDDING_DETAILS = {
	DATE: "November 8, 2025",
	VENUE: "Willowdale Estate",
	STREET: "24 Ashbury Street",
	CITY: "Topsfield, MA",
};

type PageType = {
	text: string;
	url: string;
};

export const PATHS = {
	PAGES: {
		HOME: "/home",
		WHO_ARE_YOU: "/who-are-you",
		VENUE: "/venue",
		AGENDA: "/agenda",
		THINGS_TO_KNOW: "/things-to-know",
		OUR_STORY: "/our-story",
		SIGN_IN: "/sign-in",
	},
};

export const SITE_PAGES: PageType[] = [
	{
		text: "Home",
		url: PATHS.PAGES.HOME,
	},
	{
		text: "Venue",
		url: PATHS.PAGES.VENUE,
	},
	// {
	// 	text: "Agenda",
	// 	url: PATHS.PAGES.AGENDA,
	// },
	{
		text: "Things to Know",
		url: PATHS.PAGES.THINGS_TO_KNOW,
	},
	{
		text: "Wedding Party",
		url: "/wedding-party",
	},
	{
		text: "Our Story",
		url: PATHS.PAGES.OUR_STORY,
	},
];

export const mobileNavBreakpoint = "md";

export enum PHOTO_CREDIT {
	ENGAGEMENT = "Adolfo Florentino",
	WILLOWDALE = "Mark Spooner",
	WILLOWDALE2 = "Jessica K. Feiden Photography",
	DOUG = "Douglas Odell",
	JEFF = "Jeff Chen",
}

export const contentAreaProps: GridColProps = {
	pl: { base: "md", [mobileNavBreakpoint]: 0 },
	pr: { base: "md", [mobileNavBreakpoint]: 0 },
};
