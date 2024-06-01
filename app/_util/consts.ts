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

export enum FORM_STATES {
	LOADING = "loading",
	IDLE = "idle",
	SUBMITTING = "submitting",
	SUBMITTED = "submitted",
	ERROR = "error",
}

export const WEDDING_DETAILS = {
	DATE: "November 8, 2025",
	VENUE: "Willowdale Estate",
	CITY: "Topsfield, MA",
};

type PageType = {
	text: string;
	url: string;
};

export const SITE_PAGES: PageType[] = [
	{
		text: "Home",
		url: "/",
	},
	{
		text: "Venue",
		url: "/venue",
	},
	{
		text: "Agenda",
		url: "/agenda",
	},
	{
		text: "Things to Know",
		url: "/things-to-know",
	},
	{
		text: "Wedding Party",
		url: "/wedding-party",
	},
	{
		text: "Our Story",
		url: "/our-story",
	},
];

export const PATHS = {
	PAGES: {
		HOME: "/",
		WHO_ARE_YOU: "/who-are-you",
		SIGN_IN: "/sign-in",
	},
	API: {
		AUTH_SIGNIN: "/api/auth/signin",
		AUTH_CREDENTIALS: "/api/auth/callback/credentials",
	},
};
