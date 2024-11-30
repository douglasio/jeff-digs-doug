import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { IntroText, TextButton } from "_components";
import {
	AspectRatio,
	Button,
	GridCol,
	Image,
	Text,
	Title,
} from "@mantine/core";
import { FONTS } from "_styles";
import {
	contentAreaProps,
	mobileNavBreakpoint,
	PHOTO_CREDIT,
	WEDDING_DETAILS,
} from "_util";
import {
	faArrowUpRightFromSquare,
	faCar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata: Metadata = {
	title: "The Venue",
	description: "The Willowdale Estate will be awesome, you will see.",
};

const LeftImage = () => (
	<Image
		alt="Willowdale front of house in the fall, photo credit: Mark Spooner"
		src={"static/images/willowdale.webp"}
		className="image-dimmed image-fill"
	/>
);

const LeftImage2 = () => (
	<Image
		className="image-dimmed image-fill"
		src="/static/images/willowdale_cookies.webp"
		alt={`Cookie spread. Photo credit: ${PHOTO_CREDIT.WILLOWDALE2}`}
	/>
);

const LeftImage3 = () => (
	<Image
		className="image-dimmed-more image-fill"
		src="/static/images/willowdale_ceremony.webp"
		alt={`The indoor ceremony area. Photo credit: ${PHOTO_CREDIT.WILLOWDALE}`}
	/>
);

const Venue = () => {
	return (
		<>
			<GridCol span={{ base: 12, md: 6 }}>
				<AspectRatio visibleFrom={mobileNavBreakpoint} ratio={4 / 6}>
					<LeftImage />
				</AspectRatio>
				<AspectRatio hiddenFrom={mobileNavBreakpoint} ratio={1 / 1}>
					<LeftImage />
				</AspectRatio>
			</GridCol>
			<GridCol span={{ base: 12, md: 6 }} {...contentAreaProps}>
				<Title className={FONTS.MRS_EAVES.className} order={1}>
					The Venue
				</Title>
				<section>
					<Title order={2} size="lg">
						{WEDDING_DETAILS.VENUE}
					</Title>
					<Title order={2}>
						{WEDDING_DETAILS.STREET}, {WEDDING_DETAILS.CITY}
					</Title>
				</section>
				<IntroText>
					We&rsquo;re throwing a house party at the New England
					equivalent of Hagrid&rsquo;s cottage and you&rsquo;re all
					invited.
				</IntroText>
				<section>
					<Title order={4}>Getting to Willowdale</Title>
					<Text>It’s off Route 1. </Text>

					<Text component="ol">
						<li>
							Take Ipswich Street until you see a big grassy field
							on your right.
						</li>
						<li>Take a right onto Asbury Street</li>
						<li>Take a left onto Bradley Palmer State Park Road</li>
						<li> You’ll see signs. Park in the parking lot.</li>
					</Text>
					<Text mb="xs">
						Or you can ignore all that and use GPS like everyone
						else.
					</Text>
					<TextButton
						icon={faCar}
						href="https://www.google.com/maps/place/Willowdale+Estate/@42.6543389,-70.9093208,841m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89e31a27189948a1:0xc8138557ae162bf4!8m2!3d42.654335!4d-70.9067459!16s%2Fg%2F11fyzdqjvz?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
					>
						Driving directions
					</TextButton>
				</section>
				{/* <iframe
					width="600"
					height="300"
					style={{
						border: 0,
						filter: "brightness(0.8) grayscale(0.5) sepia(0.2)",
						width: "100%",
						maxWidth: "100%",
					}}
					loading="lazy"
					src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJoUiZGCca44kR9CsWrleFE8g&key=AIzaSyCu4Q2UOOBigMYq86auRI_TYZXPZdPXsoQ"
				></iframe> */}
			</GridCol>
			<GridCol span={{ base: 12, md: 6 }} {...contentAreaProps}>
				<Title order={4}>Venue Details</Title>
				<Title order={5}>Indoor Wedding</Title>
				<Text>
					This will be an indoor wedding, however depending on the
					weather we may take advantage of the outdoor space for the
					ceremony. That said, it will be November in New England, so
					be prepared.
				</Text>
				<Title order={5}>Parking</Title>
				<Text>There is ample parking at the venue.</Text>
				<AspectRatio hiddenFrom={mobileNavBreakpoint} ratio={5 / 2}>
					<LeftImage3 />
				</AspectRatio>
			</GridCol>
			<GridCol span={{ base: 12, md: 6 }}>
				<AspectRatio visibleFrom={mobileNavBreakpoint} ratio={1 / 1}>
					<LeftImage3 />
				</AspectRatio>
			</GridCol>
			<GridCol span={{ base: 12, md: 6 }}>
				<AspectRatio visibleFrom={mobileNavBreakpoint} ratio={1 / 1}>
					<LeftImage2 />
				</AspectRatio>
			</GridCol>
			<GridCol span={{ base: 12, md: 6 }} {...contentAreaProps}>
				<section>
					<Title order={4}>How we chose Willowdale</Title>
					<Text>
						When researching venues, Willowdale kept coming up in
						lists despite Doug repeatedly saying it looked dated and
						like it might smell weird. But after touring, the energy
						was undeniable. Loaded with character, cozy but premium,
						historic, and shrouded by forest so one will hear us
						partying.
					</Text>
					<Text>
						After consulting with some friends and trying to picture
						what our wedding might look like in each of the venues
						we toured, we felt like having a big house party with
						all of our closest friends and family was the best fit
						for us, and Willowdale would give us exactly that vibe.
					</Text>
					<Text>
						A few weeks after we returned from our tours, we
						received a package in the mail with chocolate chip
						cookies baked on-site and a personalized letter from our
						tour guide. When you try those cookies, you&rsquo;ll
						understand why that really sealed the deal.
					</Text>
				</section>
				<Button
					component={Link}
					href="https://www.willowdaleestate.com/weddings/our-venue"
					target="_blank"
					rightSection={
						<FontAwesomeIcon
							icon={faArrowUpRightFromSquare}
							style={{ width: "1rem" }}
						/>
					}
				>
					More about Willowdale
				</Button>
				<AspectRatio
					mt="lg"
					hiddenFrom={mobileNavBreakpoint}
					ratio={1 / 1}
				>
					<LeftImage2 />
				</AspectRatio>
			</GridCol>
		</>
	);
};

export default Venue;
