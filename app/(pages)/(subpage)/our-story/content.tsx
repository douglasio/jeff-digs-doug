import {
	faBeer,
	faCat,
	faDiceThree,
	faDog,
	faHandshake,
	faHeartBroken,
	faMarsDouble,
	faRing,
	faTruckMoving,
} from "@fortawesome/free-solid-svg-icons";

export const timelineEvents = [
	{
		key: 1,
		bullet: faHandshake,
		date: "September 2020",
		title: "Swiped right on Tinder",
		description:
			"These were the photos that made us swipe right. After a lot of back and forth over what sort of first date was acceptable during COVID, we eventually agreed to meet in person.",
		image: {
			url: "/static/images/timeline_092020.jpg",
			alt: "Doug and Jeff Tinder images",
		},
	},
	{
		key: 2,
		bullet: faBeer,
		date: "September 2020",
		title: "First date",
		description: (
			<>
				We split a meal from the Chicken &amp; Rice Guys truck outside
				Night Shift in Everett, even though we both would have happily
				destroyed our own orders. Jeff thought Doug was ditching him
				because he had to use the bathroom. But he just has a small
				bladder. Once we realized we both played Pok&eacute;mon Go, we
				knew we&rsquo;d found something special.
			</>
		),
	},
	{
		key: 3,
		bullet: faHeartBroken,
		date: "February 2021",
		title: <>First Valentine&rsquo;s Day</>,
		description: (
			<>
				After a few months of dating, Jeff and Doug celebrated their
				first Valentine&rsquo;s Day together by deciding there was no
				way their relationship could continue. Within 5&ndash;7 business
				days, they had realized that was actually not correct and
				promptly resumed dating.
			</>
		),
	},
	{
		key: 4,
		bullet: faTruckMoving,
		date: "August 2021",
		title: "Moved in together",
		description: (
			<>
				Jeff basically moved into Doug’s apartment 3 weeks after they
				met, but we actually moved into our own place in Everett later
				that year. It was a year marked by painting walls in fun shades
				of blue, trying to stop Boba from peeing on everything they own,
				and recovering from concussions inflicted by the
				apartment&rsquo;s beautiful polished concrete floors.{" "}
			</>
		),
		image: {
			url: "/static/images/timeline_082021_1.jpeg",
			alt: "Our apartment living room at the Batch Yard in Everett",
		},
	},
	{
		key: 5,
		bullet: faCat,
		date: "August 2021",
		title: "Adopted our first joint child",
		description: (
			<>
				Jeff mentioned in passing that he&rsquo;d let us adopt another
				cat as long as it was a little black kitten. Within the week,
				Doug had adopted Boba, and our lives were changed forever.
			</>
		),
		image: {
			url: "/static/images/timeline_082021.jpeg",
			alt: "Boba staring menacingly",
		},
	},
	{
		key: 6,
		bullet: faTruckMoving,
		date: "August 2022",
		title: "Moved cross-country",
		description: (
			<>
				When we first started dating, Jeff mentioned that he
				wasn&rsquo;t looking for anything serious as he was most likely
				moving to the west coast within the year. Doug said &ldquo;me
				too,&rdquo; and a couple short years later, we made that a
				reality.
			</>
		),
	},
	{
		key: 7,
		bullet: faDog,
		date: "November 2022",
		title: "Had a third child",
		description: (
			<>
				Jeff took one look at those floppy ears and said &ldquo;I have
				to have him.&rdquo; And despite better judgement, we welcomed a
				third fur child into our midst.
			</>
		),
		image: {
			url: "/static/images/timeline_112022.jpeg",
			alt: "Gordy the dog as a puppy looking eagerly at the cameraman",
			ratio: 1 / 1,
		},
	},
	{
		key: 8,
		bullet: faDiceThree,
		date: "March 2023",
		title: "Started a throuple",
		description: (
			<>
				Our good friend and future officiant Kara began staying with us
				for extended trips during her time as a digital nomad. It only
				took about a year of constant badgering before she finally
				joined us in San Diego.
			</>
		),
		image: {
			url: "/static/images/timeline_032023.jpeg",
			alt: "Jeff, Doug, and Kara on their group vacation to Hawaii",
		},
	},
	{
		key: 9,
		bullet: faRing,
		date: "July 2023",
		title: "Got engaged",
		description: (
			<>
				Surrounded and supported by some of our favorite people, Doug
				proposed to Jeff on a beach in Cabarete at sunset, followed by a
				house party at an oceanfront resort with an in-house chef to
				prepare dinner and a photographer to capture the occasion. And
				yet Jeff still complains that Doug never plans anything.
			</>
		),
		image: {
			url: "/static/images/timeline_072023.jpg",
			alt: "Doug on one knee and Jeff crying because he is agreeing to let Doug yell at him to not leave his shoes all over the floor until the day he dies",
			ratio: 1 / 1,
		},
	},
	{
		key: 10,
		bullet: faTruckMoving,
		date: "June 2025",
		title: "Moved to New York (baybeeee)",
		description: (
			<>
				Jeff and Doug move to one of the most expensive cities in the
				country to save on rent. And to be closer to family and friends,
				take advantage of a functioning public transit system, and be
				able to walk to coffee shop sometimes.
			</>
		),
	},
	{
		key: 11,
		bullet: faMarsDouble,
		date: "November 2025",
		title: "Got married",
		description: (
			<>
				On November 8, 2025, Jeff and Doug throw the best wedding anyone
				has ever been to, everything goes off without a hitch, and the
				venue thinks it&rsquo;s such an amazing event they decide to
				comp the entire thing. Jeff and Doug live happily ever after,
				both separately winning the lottery immediately following their
				nuptials and retiring early to travel the world and/or buy a
				small compound for all their family and friends to live on.
			</>
		),
	},
];

export const gridNumbers = [
	{
		key: 1,
		label: "Cities visited",
		number: 20,
	},
	{
		key: 3,
		label: "Countries explored",
		number: 4,
	},
	{
		key: 2,
		label: "Apartments lived in",
		number: 3,
	},
	{
		key: 4,
		label: "Pets adopted",
		number: 3,
	},
	{
		key: 5,
		label: "McDonalds orders",
		number: 697,
	},
	{
		key: 6,
		label: "Times Jeff has strangled Doug in public",
		number: <>&infin;</>,
	},
];
