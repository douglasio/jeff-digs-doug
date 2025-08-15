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
			url: "/static/images/webp/timeline_092020.webp",
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
				After a few months of dating, we celebrated our first
				Valentine&rsquo;s Day together by deciding there was no way our
				relationship could continue. Within 5&ndash;7 business days, we
				realized that was actually not correct and promptly resumed
				dating.
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
				Jeff basically moved into Doug&rsquo;s apartment 3 weeks after
				we met, but we actually moved into our own place in Everett
				later that year. It was a year marked by painting walls in fun
				shades of blue, trying to stop Boba from peeing on everything we
				owned, and recovering from concussions inflicted by the
				apartment&rsquo;s beautiful polished concrete floors.{" "}
			</>
		),
		image: {
			url: "/static/images/webp/timeline_082021_1.webp",
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
			url: "/static/images/webp/timeline_082021.webp",
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
				When they first started dating, Jeff mentioned that he
				wasn&rsquo;t looking for anything serious as he was most likely
				moving to the west coast within the year. Doug said &ldquo;me
				too,&rdquo; and a couple short years later, we made that a
				reality.
			</>
		),
		image: {
			url: "/static/images/webp/timeline_082225.webp",
			alt: "Jeff and Doug on a plane to San Diego",
			ratio: 1.5 / 1,
		},
	},
	{
		key: 7,
		bullet: faDog,
		date: "November 2022",
		title: "Had a third child",
		description: (
			<>
				Jeff took one look at those floppy ears and within minutes
				applied to adopt Gordito, or Gordy for short. And despite better
				judgement, a third fur child was added to the mix.
			</>
		),
		image: {
			url: "/static/images/webp/timeline_112022.webp",
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
				Good friend and future officiant Kara began staying with us for
				extended trips during her time as a digital nomad. It only took
				about a year of constant badgering before she finally joined us
				in San Diego.
			</>
		),
		image: {
			url: "/static/images/webp/timeline_032023.webp",
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
			url: "/static/images/webp/timeline_072023.webp",
			alt: "Doug on one knee and Jeff crying because he is agreeing to let Doug yell at him to not leave his shoes all over the floor until the day he dies",
			ratio: 1 / 1,
		},
	},
	{
		key: 10,
		bullet: faMarsDouble,
		date: "November 2025",
		title: "Got married",
		description: (
			<>
				On November 8, 2025, we throw the best wedding anyone has ever
				been to, everything goes off without a hitch, and the venue
				thinks it&rsquo;s such an amazing event they decide to comp the
				entire thing. we live happily ever after, both separately
				winning the lottery immediately following their nuptials and
				retiring early to travel the world and/or buy a small compound
				for all their family, friends, and animals to live on.
			</>
		),
	},
];

export const gridNumbers = [
	{
		key: 1,
		label: "Cities visited",
		number: 21,
	},
	{
		key: 3,
		label: "Countries explored",
		number: 4,
	},
	{
		key: 2,
		label: "Apartments lived in",
		number: 4,
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
