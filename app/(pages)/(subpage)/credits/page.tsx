import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { SVG } from "_components";
import {
	Box,
	Container,
	Grid,
	GridCol,
	List,
	ListItem,
	Text,
	Title,
} from "@mantine/core";
import { FONTS } from "_styles";

export const metadata: Metadata = {
	title: "Credits",
	description: "Special thanks to all who made it happen.",
};

const thanks = {
	vendors: [
		{
			name: "Julia D’Agostino",
			description:
				"wedding coordinator, along with the rest of the amazing team at the Willowdale Estate",
			url: "https://www.willowdaleestate.com/about",
		},
		{
			name: "Veejay Floresca",
			description: "suit designer and winner of Project Runway Season 21",
			url: "https://veejayfloresca.com/",
		},
		{
			name: "Ashley Chouette (Chouette Designs)",
			description: "wedding band designer and jewelry maker",
			url: "https://chouettedesigns.com/",
		},
		{
			name: "Zac Wolf Photography",
			description: "wedding photographer",
			url: "https://www.zacxwolf.com/",
		},
		{
			name: "Adolfo Florentino",
			description: "Dominican Republic-based wedding photographer",
			url: "https://www.adolfoflorentino.com/",
		},
		{
			name: "Flourish Bake Shoppe",
			description: "bakery in Beverly, MA",
			url: "https://www.flourishbakeshoppe.com/",
		},
		{
			name: "Wes Fjeldheim",
			description: "artist and graphic designer",
			url: "https://wesfjart.com/",
		},

		{
			name: "Deacon Giles Distillery",
			description: "non-rehearsal dinner / welcome drinks venue",
			url: "https://www.deacongiles.com/",
		},

		{
			name: "Pizzeria Regina & Polcari’s",
			description: "non-rehearsal dinner / welcome drinks caterer",
			url: "https://reginapizza.com/polcaris/",
		},
		{
			name: "Life Alive",
			description:
				"non-rehearsal dinner / welcome drinks caterer for the vegans",
			url: "https://www.lifealive.com/",
		},

		{
			name: "The Cove at Salem",
			description: "hotel for room block guests",
			url: "https://www.coveatsalem.com/",
		},

		{
			name: "First Charter",
			description: "hotel guest shuttle",
			url: "https://firstcharterbus.com/your-event/?gad_source=1&gad_campaignid=12692833089&gbraid=0AAAAAD95kj-BiZXHKUzZKiwccSzPw81gj&gclid=EAIaIQobChMIvfSqs6frkAMV1SFECB1nfTKqEAAYASAAEgIPW_D_BwE",
		},
	],
	friends: [
		{ name: "Kara Zinser", description: "officiant and support system" },
		{
			name: "Zach Giordano",
			description:
				"roast master and groomsman, for housing and feeding us during the week, and for coming up with #jeffdigsdoug",
		},
		{
			name: "Haesol Kang",
			description:
				"flower girl / lap dancer, for providing nips and whimsy",
		},
		{
			name: "Cameron, Jordan, Chris, Morgan, Tony, Kevin, Anthony, and Tai",
			description: "our groomsmen, roasters, and toasters",
		},
		{
			name: "Bonni Sandler",
			description:
				"Doug’s mother, for creating the memorial display, providing nutrients to Doug in the womb and also afterwards",
		},
		{
			name: "Meghan Lowell",
			description: "also for housing and feeding us during the week",
		},
		{
			name: "Matt Lee",
			description: "for bringing supplies for the after party",
		},
	],
	services: [
		{ name: "Canva", description: "where all the signage was created" },
		{
			name: "NextJS",
			description:
				"a JS framework that is complete overkill for a wedding website",
		},
		{
			name: "Cloudflare",
			description:
				"a great place to host a website not built with NextJS",
		},
		{
			name: "Mantine",
			description:
				"a well-designed and super adaptabile React component library",
		},
		{
			name: "RSVPify",
			description:
				"the only event management software that would let me embed an RSVP form in a custom website",
		},
	],
};

const Credits = () => {
	return (
		<Container mt="lg">
			<Grid>
				<GridCol span={{ base: 12 }}>
					<Title className={FONTS.MRS_EAVES.className} order={1}>
						Credits and Special Thanks
					</Title>
					<Title order={2} mt="md">
						Our amazing vendors, who we can&rsquo;t recommend highly
						enough
					</Title>
					<List size="xs" spacing="xs">
						{thanks.vendors.map(({ name, description, url }) => (
							<ListItem key={name}>
								<a href={url} target="_blank">
									{name}
								</a>
								&nbsp;&ndash;&nbsp;{description}
							</ListItem>
						))}
					</List>
					<Title order={2} mt="sm">
						Our amazing friends and family who went above and beyond
					</Title>

					<List size="xs" spacing="xs">
						{thanks.friends.map(({ name, description }) => (
							<ListItem key={name}>
								{name}
								&nbsp;&ndash;&nbsp;{description}
							</ListItem>
						))}
					</List>

					<Title order={2} mt="sm">
						The Nerd Things
					</Title>
					<List size="xs" spacing="xs">
						{thanks.services.map(({ name, description }) => (
							<ListItem key={name}>
								{name}
								&nbsp;&ndash;&nbsp;{description}
							</ListItem>
						))}
					</List>
					<Text mt="lg" size="xs">
						<a
							href="https://www.npr.org/2025/11/10/nx-s1-5604293/scotus-rejects-gay-marriage-appeal"
							target="_blank"
						>
							...and none for Kim Davis💅
						</a>
					</Text>
					<Box ta="right">
						<Link href="/">
							<SVG.Initials variant="leaves" width="10rem" />
						</Link>
					</Box>
				</GridCol>
			</Grid>
		</Container>
	);
};

export default Credits;

