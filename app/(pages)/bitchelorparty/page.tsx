import React from "react";
import { IntroText, Nav } from "_components";
import { Grid, GridCol, Image, Stack, Text, Title } from "@mantine/core";
import { FONTS } from "_styles";

const BitchelorParty = () => {
	return (
		<>
			{/* <Nav center={true} showLogo={true} /> */}
			<Grid gutter="xl" mr="lg" maw="1920px" m="0 auto">
				<GridCol
					span={{ base: 12, sm: 6 }}
					style={{ overflow: "hidden" }}
				>
					<Image
						alt="Doug and Jeff dancing with friends in the DR post-engagement, photo credit: Adolfo Florentino"
						src={"static/images/engagement_dancing.jpg"}
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
							The Bitchelor Party
						</Title>
						<section>
							<Title order={2}>
								<span className="text-no-wrap">
									Thursday, May 8&ndash;
								</span>
								<span className="text-no-wrap">
									Sunday, May 11, 2025
								</span>
							</Title>
							<Title order={3}>
								<span className="text-no-wrap">
									2033 East Belding Drive,
								</span>
								<span className="text-no-wrap">
									Palm Springs, CA 92262
								</span>
							</Title>
						</section>
						<IntroText>
							Bachelors have one pre-wedding celebration with
							their friends. Bitchelors have as many as they want.
						</IntroText>
						<section>
							<Title order={4}>Getting to Palm Springs</Title>
							<Text>
								Relax, we&rsquo;re figuring it out... You could
								also just use Google Maps like a normal person.
							</Text>
						</section>
						<section>
							<Image
								alt="House exterior"
								src={"static/images/bitchelor_house_1.webp"}
								className="image-dimmed image-fill"
							/>
							<Text>
								Relax, we&rsquo;re figuring it out... You could
								also just use Google Maps like a normal person.
							</Text>
						</section>
					</Stack>
				</GridCol>
			</Grid>
		</>
	);
};

export default BitchelorParty;
