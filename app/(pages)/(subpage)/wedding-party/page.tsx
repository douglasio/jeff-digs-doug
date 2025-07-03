import React from "react";
import { Metadata } from "next";
import { IntroText, PartyCard, SVG } from "_components";
import {
	AspectRatio,
	Grid,
	GridCol,
	Image,
	List,
	ListItem,
	Paper,
	SimpleGrid,
	Text,
	Title,
} from "@mantine/core";
import { FONTS } from "_styles";
import { mobileNavBreakpoint } from "_util";

export const metadata: Metadata = {
	title: "Wedding Party",
	description: "Total sausage fest.",
};

const partyGridProps = {
	cols: { base: 1, [mobileNavBreakpoint]: 3 },
	mb: "xl",
};

const partyPeople = {
	doug: [
		{
			id: "chris",
			name: "Chris Hong",
			image: {
				src: "/static/images/doug-and-chris.jpg",
				alt: "Chris Hong",
			},
			description: {
				intro: (
					<>
						Chris was Doug&rsquo;s randomly assigned college
						roommate, and now he has a beard.
					</>
				),
				rose: "Same kind of Asian as the groom",
				bud: "Still has the opportunity to get better glasses",
				thorn: "Lives in Texas",
			},
		},

		{
			id: "tai",
			name: "Tai Nguyen",
			image: {
				src: "/static/images/doug-and-tai.jpg",
				alt: "Tai Nguyen",
			},
			description: {
				intro: (
					<>
						Tai was Doug&rsquo;s randomly assigned college roommate,
						and they went to Japan together.
					</>
				),
				rose: <>His mom is a great cook</>,
				bud: (
					<>
						One day the memory of watching the final season of{" "}
						<em>Game of Thrones</em> together will fade
					</>
				),
				thorn: (
					<>
						A little <em>too</em> good at video games
					</>
				),
			},
		},
		{
			id: "tony",
			name: "Tony Faraco-Hadlock",
			image: {
				src: "/static/images/doug-and-tony.jpg",
				alt: "Anthony",
			},
			description: {
				intro: (
					<>
						Tony, or Anthony if you did&rsquo;t go to BU, was in the
						same theatre group as Doug.
					</>
				),
				rose: (
					<>
						Made valiant efforts to get Doug into <em>Overwatch</em>
					</>
				),
				bud: "Looking forward to meeting his dog one day",
				thorn: "Tesla owner (pre-Elon villain arc)",
			},
		},
	],
	jeff: [
		{
			id: "anthony",
			name: "Anthony Murphy",
			image: {
				src: "/static/images/jeff-and-anthony.jpg",
				alt: "His mom is nice",
			},
			description: {
				intro: (
					<>
						Jeff and Anthony met at Saint Anselm College where
						Anthony protected a drunken Jeff from being written up
						by RAs.
					</>
				),
				rose: "Gave Jeff the white family he always wanted",
				bud: (
					<>
						Start a dental practice together{" "}
						<s>
							don&rsquo;t do it, giving Jeff power is a terrible
							decision
						</s>
					</>
				),
				thorn: "Straight",
			},
		},
		{
			id: "kevin",
			name: "Kevin Liang",
			image: {
				src: "/static/images/jeff-and-kevin.jpg",
				alt: "Thank god there's someone besides Doug to help keep Jeff in check",
			},
			description: {
				intro: (
					<>
						Kevin and Jeff are childhood best friends. Their
						families use to work in the restaurant business
						together. Crab rangoon anyone?
					</>
				),
				rose: "Allows Jeff to thrive in his guncle era",
				bud: (
					<>
						Rekindled their relationship because Kevin married one
						of Jeff&rsquo;s favorite people, Sarah ❤️
					</>
				),
				thorn: "Straight, and still bullies Jeff",
			},
		},
		{
			id: "zach",
			name: "Zach Giordano",
			image: {
				src: "/static/images/jeff-and-zach.jpg",
				alt: "Anthony",
			},
			description: {
				intro: (
					<>
						Zach and Jeff met over their mutual love for sweet
						treats, which led to Jeff being adopted into the friend
						group as the diversity hire.
					</>
				),
				rose: "One of the most creative people Jeff has ever met and also the loudest",
				bud: (
					<>
						Can&rsquo;t wait for their &ldquo;I don&rsquo;t think
						so, honey&rdquo; rant about this wedding
					</>
				),
				thorn: "Not straight, but is from New Jersey...",
			},
		},
	],
	pets: [
		{
			id: "cheeto",
			name: "Cheeto",
			image: {
				src: "/static/images/cheeto.jpg",
				alt: "example of an animal with limited intelligence",
			},
			description: {
				intro: <>Cheeto is orange.</>,
				rose: (
					<>
						In the words of one wedding guest, &ldquo;an A+
						cat!&rdquo;
					</>
				),
				bud: (
					<>
						Here&rsquo;s hoping he doesn&rsquo; succomb to his heart
						murmur for many years to come
					</>
				),
				thorn: "Tried to run away",
			},
		},
		{
			id: "boba",
			name: "Boba",
			image: {
				src: "/static/images/boba.jpg",
				alt: "cat peeing in toilet",
			},
			description: {
				intro: <>Boba terrorizes everyone daily.</>,
				rose: "Ready and willing to defend her housemates from anything, including other housemates",
				bud: (
					<>
						Here&rsquo;s to her continued ability to pee in
						appropriate places
					</>
				),
				thorn: "Too many to list",
			},
		},
		{
			id: "gordy",
			name: "Gordy",
			image: {
				src: "/static/images/gordy.jpg",
				alt: "italian greimaraner",
			},
			description: {
				intro: <>Gordy is lucky he still has one floppy ear.</>,
				rose: (
					<>Gives Doug the affection he doesn&rsquo;t get from Jeff</>
				),
				bud: (
					<>
						Hoping he doesn&rsquo;t freeze to death on the east
						coast
					</>
				),
				thorn: "Afraid of large bags",
			},
		},
	],
};

const WeddingParty = () => {
	return (
		<GridCol span={{ base: 12, xl: 10 }} m="0 auto" mt="md">
			<Title className={FONTS.MRS_EAVES.className} order={1}>
				Wedding Party
			</Title>
			<IntroText>
				We assembled the dream team. <br />
				Presented in no particular order...
			</IntroText>

			<Title order={2}>The Officiant</Title>

			<Paper mb="xl">
				<Grid align="center">
					<GridCol span={{ base: 6, xl: 5 }}>
						<AspectRatio
							className="image-container-warm-ice"
							ratio={1 / 1}
						>
							<Image
								src="/static/images/jeff-doug-kara.jpg"
								alt="Thrupple"
							/>
						</AspectRatio>
					</GridCol>
					<GridCol span={{ base: 6, xl: 7 }}>
						<Title order={3} size="md">
							Kara Zinser
						</Title>
						<Text>
							Kara is Doug and Jeff&rsquo;s unofficial third, and
							their official officiant. And they were roommates.
						</Text>
						<List>
							<ListItem
								icon={
									<SVG.Rose style={{ marginTop: "0.2em" }} />
								}
							>
								<Title order={3} mb="0">
									<strong>ROSE</strong> (positives and
									highlights)
								</Title>
								<Text size="xs">
									Living proof that exposure to the queer
									community <em>does</em> turn you gay
								</Text>
							</ListItem>
							<ListItem
								icon={
									<SVG.Bud style={{ marginTop: "0.2em" }} />
								}
							>
								<Title order={3} mb="0">
									<strong>BUD</strong> (future hopes and
									dreams)
								</Title>
								<Text size="xs">
									Her ankle will heal someday, probably
								</Text>
							</ListItem>
							<ListItem
								icon={
									<SVG.Thorn style={{ marginTop: "0.2em" }} />
								}
							>
								<Title order={3} mb="0">
									<strong>THORN</strong> (challenges or areas
									of improvement)
								</Title>
								<Text size="xs">Is a woman</Text>
							</ListItem>
						</List>
					</GridCol>
				</Grid>
			</Paper>

			<Title order={2}>Doug&rsquo;s MySpace Top 3</Title>

			<SimpleGrid {...partyGridProps}>
				{partyPeople.doug.map((person, i) => (
					<PartyCard {...person} index={i} key={person.id} />
				))}
			</SimpleGrid>

			<Title order={2}>
				<span className="text-no-wrap">Jeff&rsquo;s Instagram</span>{" "}
				<span className="text-no-wrap">Close Friends List</span>
			</Title>

			<SimpleGrid {...partyGridProps}>
				{partyPeople.jeff.map((person, i) => (
					<PartyCard {...person} index={i} key={person.id} />
				))}
			</SimpleGrid>

			<Title order={2}>The San Diego Zoo</Title>
			<Text>
				While they won&rsquo;t be in attendance, their fur will almost
				definitely be stuck to some of the grooms&rsquo; attire.
			</Text>

			<SimpleGrid {...partyGridProps}>
				{partyPeople.pets.map((person, i) => (
					<PartyCard {...person} index={i} key={person.id} />
				))}
			</SimpleGrid>
		</GridCol>
	);
};

export default WeddingParty;
