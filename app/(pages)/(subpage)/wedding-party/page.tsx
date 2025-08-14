import React from "react";
import { Metadata } from "next";
import { Image, IntroText, PartyCard, SVG } from "_components";
import {
	AspectRatio,
	Grid,
	GridCol,
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
				src: "/static/images/webp/doug-and-chris.webp",
				alt: "Chris Hong",
			},
			description: {
				intro: (
					<>
						Chris was Doug&rsquo;s randomly assigned college
						roommate&mdash;and now he has a beard. He&rsquo;s stuck
						with Doug from lobster night at Sherman Hall to their
						crazy Italian landlord to the PoGo years and beyond. A
						true OG, Chris is one of the few reasons Doug would ever
						travel to Texas.
					</>
				),
				rose: "Is also Taiwanese like the groom",
				bud: "Still has the opportunity to get better glasses",
				thorn: "Lives in Texas",
			},
		},

		{
			id: "tai",
			name: "Tai Nguyen",
			image: {
				src: "/static/images/webp/doug-and-tai.webp",
				alt: "Tai Nguyen",
			},
			description: {
				intro: (
					<>
						Tai was also a random college roommate assignment. Their
						friendship can be calculated in pounds of sushi eaten,
						episodes of <em>Attack on Titan</em> watched, and time
						spent talking about Japan.
					</>
				),
				rose: <>Married to Sherry</>,
				bud: (
					<>
						One day, the memory of watching the final season of{" "}
						<em>Game of Thrones</em> together will fade
					</>
				),
				thorn: (
					<>
						Encyclopedic knowledge of movies, TV, and anime has
						struggled to keep up with the amount of content made in
						recent years
					</>
				),
			},
		},
		{
			id: "tony",
			name: "Tony Faraco-Hadlock",
			image: {
				src: "/static/images/webp/doug-and-tony.webp",
				alt: "Anthony",
			},
			description: {
				intro: (
					<>
						Tony, or Anthony if you didn&rsquo;t go to BU, was in
						the theatre group <em>Wandering Minds</em> with Doug.
						They built a lasting connection over being theatre
						nerds, computer nerds, and nerds for staying in touch
						with good people despite time and distance.
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
				src: "/static/images/webp/jeff-and-anthony.webp",
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
				src: "/static/images/webp/jeff-and-kevin.webp",
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
				src: "/static/images/webp/jeff-and-zach.webp",
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
				src: "/static/images/webp/cheeto.webp",
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
						Here&rsquo;s hoping he doesn&rsquo;t succumb to his
						heart murmur for many years to come
					</>
				),
				thorn: "Tried to run away",
			},
		},
		{
			id: "boba",
			name: "Boba",
			image: {
				src: "/static/images/webp/boba.webp",
				alt: "cat peeing in toilet",
			},
			description: {
				intro: (
					<>
						Boba terrorizes everyone daily. Equal parts cuddle
						monster and regular monster. Always ready and willing to
						defend her housemates from anything, including other
						housemates.
					</>
				),
				rose: "Taught herself how to use a human toilet",
				bud: <>May someday atone for her sins</>,
				thorn: "Attacks on sight",
			},
		},
		{
			id: "gordy",
			name: "Gordy",
			image: {
				src: "/static/images/webp/gordy.webp",
				alt: "italian greimaraner",
			},
			description: {
				intro: (
					<>
						Gordy is lucky he still has one floppy ear, otherwise
						he&rsquo;d just be your average Tijuana street dog.
						Instead, he enjoys a life of treats, soft pillows, and
						being celebrated every time he walks into a room.
					</>
				),
				rose: <>Gives Doug the affection that Jeff denies him</>,
				bud: (
					<>
						May he enjoy this time in his life before he&rsquo;s
						experienced a New England winter
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
					<GridCol span={{ base: 12, sm: 6, xl: 5 }}>
						<AspectRatio
							className="image-container-warm-ice"
							ratio={1080 / 720}
						>
							<Image
								src="/static/images/webp/kara-jeff-doug-hawaii.webp"
								alt="Thrupple"
								height={500}
								width={1200}
							/>
						</AspectRatio>
					</GridCol>
					<GridCol span={{ base: 12, sm: 6, xl: 7 }}>
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
								<Text size="xs">
									Is a woman <em>(just kiddinggg)</em>
								</Text>
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
				While their pets won&rsquo;t be in attendance, their fur will
				almost definitely be stuck to some of the grooms&rsquo; attire,
				so they deserver a shout-out here.
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
