export const HUBSPOT = {
	PORTAL_ID: "2847769",
	FORM_ID: {
		INTAKE_FORM: "be0cfe31-d5e9-478e-815a-0173308fffa2",
	},
	SUBMIT_ENDPOINT:
		"https://api.hsforms.com/submissions/v3/integration/submit/",
};

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
