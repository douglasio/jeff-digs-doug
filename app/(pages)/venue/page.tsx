import React from "react";
import { IntroText, Nav } from "_components";
import { Grid, GridCol, Image, Stack, Text, Title } from "@mantine/core";
import { FONTS } from "_styles";

const Venue = () => {
	return (
		<>
			<Nav center={true} showLogo={true} />
			<Grid gutter="xl" mr="lg" maw="1920px" m="0 auto">
				<GridCol
					span={{ base: 12, sm: 6 }}
					style={{ overflow: "hidden" }}
				>
					<Image
						alt="Willowdale front of house in the fall, photo credit: Mark Spooner"
						src={"static/images/willowdale.webp"}
						className="image-dimmed image-fill"
					/>
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
							<Title order={2}>Willowdale Estate</Title>
							<Title order={3}>
								24 Ashbury Street, Topsfield, MA
							</Title>
						</section>
						<IntroText>
							We&rsquo;re throwing a house party at the New
							England equivalent of Hagrid&rsquo;s cottage and
							you&rsquo;re all invited.
						</IntroText>
						<section>
							<Title order={4}>Getting to Willowdale</Title>
							<Text>
								Relax, we&rsquo;re figuring it out... You could
								also just use Google Maps like a normal person.
							</Text>
						</section>
						<iframe
							width="600"
							height="450"
							style={{
								border: 0,
								filter: "brightness(0.8) grayscale(0.5) sepia(0.2)",
							}}
							loading="lazy"
							src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJoUiZGCca44kR9CsWrleFE8g&key=AIzaSyCu4Q2UOOBigMYq86auRI_TYZXPZdPXsoQ"
						></iframe>
					</Stack>
				</GridCol>
			</Grid>
		</>
	);
};

export default Venue;
