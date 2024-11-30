import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { IntroText, TextButton } from "_components";
import {
	AspectRatio,
	Button,
	GridCol,
	Image,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import { FONTS } from "_styles";
import { WEDDING_DETAILS } from "_util";
import {
	faArrowUpRightFromSquare,
	faBoxOpen,
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

const Venue = () => {
	return (
		<>
			<GridCol span={{ base: 12, sm: 6 }}>
				<AspectRatio visibleFrom="sm" ratio={4 / 6}>
					<LeftImage />
				</AspectRatio>
				<AspectRatio hiddenFrom="sm" ratio={1 / 1}>
					<LeftImage />
				</AspectRatio>
			</GridCol>
			<GridCol span={{ base: 12, sm: 6 }}>
				<Stack
					align="flex-start"
					justify="flex-start"
					gap="sm"
					w="100%"
				>
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
						equivalent of Hagrid&rsquo;s cottage and you&rsquo;re
						all invited.
					</IntroText>
					<section>
						<Title order={4}>Getting to Willowdale</Title>
						<Text>It’s off Route 1. </Text>

						<Text component="ol">
							<li>
								Take Ipswich Street until you see a big grassy
								field on your right.
							</li>
							<li>Take a right onto Asbury Street</li>
							<li>
								Take a left onto Bradley Palmer State Park Road
							</li>
							<li> You’ll see signs. Park in the parking lot.</li>
						</Text>
						<Text mb="xs">
							Or you can ignore all that and use GPS like everyone
							else.
						</Text>
						<TextButton
							icon={faCar}
							href="https://www.google.com/maps/dir/Phoenix/Palm+Springs,+CA/@33.4387746,-116.9486963,1331358m/data=!3m1!1e3!4m14!4m13!1m5!1m1!1s0x872b12ed50a179cb:0x8c69c7f8354a1bac!2m2!1d-112.0740373!2d33.4483771!1m5!1m1!1s0x80db1ad4ffdbe5b3:0xa1e56987c2ed797c!2m2!1d-116.5452921!2d33.8302961!3e0?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
						>
							Driving directions
						</TextButton>
					</section>
					<iframe
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
					></iframe>
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
				</Stack>
			</GridCol>
		</>
	);
};

export default Venue;
