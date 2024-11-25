import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionControl,
	AccordionPanel,
	Button,
	ButtonProps,
	Grid,
	GridCol,
	Image,
	Stack,
	Text,
	Title,
	SimpleGrid,
} from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faCar, faSun } from "@fortawesome/free-solid-svg-icons";
import { AddToCalendar, IntroText } from "_components";
import { FONTS } from "_styles";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "The Bitchelor Party",
	description: "If you are receiving this invite, you are very cool.",
};

const BitchelorParty = () => {
	interface TextButtonProps extends ButtonProps {
		href: string;
	}
	const TextButton = ({ children, href }: TextButtonProps) => (
		<Button
			component="a"
			href={href}
			p="0"
			m="0"
			target="_blank"
			variant="transparent"
		>
			{children}
		</Button>
	);

	return (
		<>
			{/* <Nav center={true} showLogo={true} /> */}
			<Grid
				maw="1920px"
				m="0 auto"
				mt="md"
				w="95%"
				gutter={{ base: 0, sm: "md" }}
			>
				<GridCol
					span={{ base: 12, sm: 5 }}
					style={{ overflow: "hidden" }}
				>
					<Image
						alt="House exterior"
						src={"static/images/bitchelor_house_3.webp"}
						className="image-dimmed-more image-fill"
						h={{ base: "auto", sm: "80vh" }}
						mb="md"
					/>
					<Image
						alt="Doug and Jeff dancing with friends in the DR post-engagement, photo credit: Adolfo Florentino"
						src={"static/images/engagement_dancing.jpg"}
						className="image-dimmed image-fill"
						h={{ base: "auto", sm: "80vh" }}
						mb="sm"
						visibleFrom="md"
					/>
					<Image
						alt="House dining area"
						src={"static/images/bitchelor_house_5.webp"}
						className="image-dimmed-more image-fill"
						h={{ base: "auto", sm: "80vh" }}
						mb="sm"
						visibleFrom="md"
					/>
				</GridCol>
				<GridCol span={{ base: 12, sm: 7 }}>
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
							{/* <Stack gap={"xs"}> */}
							<Title order={2}>
								{/* <FontAwesomeIcon
										icon={faCalendarAlt}
										className={styles.icon}
									/> */}
								Thursday, May 8&mdash;Sunday, May 11, 2025
							</Title>
							<Title order={2}>
								<address>
									{/* <FontAwesomeIcon
											icon={faHouse}
											className={styles.icon}
										/> */}
									2033 East Belding Drive, Palm Springs, CA
									92262
								</address>
							</Title>
							<AddToCalendar
								event={{
									title: "D&J Bitchelor Party",
									description:
										"https://www.jeffdigsdoug.com/bitchelor-party",
									start: "2025-05-08 14:00:00 -0800",
									end: "2025-05-11 11:00:00 -0800",
									location:
										"2033 East Belding Drive, Palm Springs, CA 92262",
								}}
							/>
							{/* </Stack> */}
						</section>
						<IntroText>
							Bachelors have one pre-wedding celebration with
							their friends. Bitchelors have as many as they want.
						</IntroText>
						<section>
							<Title order={4}>Getting to Palm Springs</Title>
							<Text>
								The airport is 10&ndash;15 minutes from downtown
								area. If you fly directly to PSP, Doug or Kara
								can transport you to and from.
							</Text>

							<Text>
								If you need help looking for/booking flights,
								please let us know! Happy to help.
							</Text>

							<Accordion multiple={true} variant="separated">
								<AccordionItem key="Boston" value="Boston">
									<AccordionControl>
										Coming from Boston, New York, or D.C.
									</AccordionControl>
									<AccordionPanel>
										<Text>
											Get a flight from the airport of
											your choice to Palm Springs
											International Airport (PSP). Spoiler
											alert: you&rsquo;ll have a layover.
										</Text>
										<Stack
											gap="0"
											align="flex-start"
											mb="xs"
										>
											<TextButton href="https://www.google.com/travel/flights/search?tfs=CBwQAhoeEgoyMDI1LTA1LTA4agcIARIDQk9TcgcIARIDUFNQGh4SCjIwMjUtMDUtMTFqBwgBEgNQU1ByBwgBEgNCT1NAAUgBcAGCAQsI____________AZgBAQ">
												<FontAwesomeIcon
													icon={faPlane}
													className={styles.icon}
												/>
												Flights from Boston
											</TextButton>
											<TextButton href="https://www.google.com/travel/flights/search?tfs=CBwQAhojEgoyMDI1LTA1LTA4agwIAxIIL20vMHJoNmtyBwgBEgNQU1AaIxIKMjAyNS0wNS0xMWoHCAESA1BTUHIMCAMSCC9tLzByaDZrQAFIAXABggELCP___________wGYAQE">
												<FontAwesomeIcon
													icon={faPlane}
													className={styles.icon}
												/>
												Flights from D.C.
											</TextButton>
											<TextButton href="https://www.google.com/travel/flights/search?tfs=CBwQAhokEgoyMDI1LTA1LTA4ag0IAxIJL20vMDJfMjg2cgcIARIDUFNQGiQSCjIwMjUtMDUtMTFqBwgBEgNQU1ByDQgDEgkvbS8wMl8yODZAAUgBcAGCAQsI____________AZgBAQ">
												<FontAwesomeIcon
													icon={faPlane}
													className={styles.icon}
												/>
												Flights from New York
											</TextButton>
										</Stack>
									</AccordionPanel>
								</AccordionItem>

								<AccordionItem key="Arizona" value="Arizona">
									<AccordionControl>
										Coming from Arizona
									</AccordionControl>
									<AccordionPanel>
										<Text>
											There are flights from PHX to PSP,
											but you also have the option to
											drive there.
										</Text>
										<Stack
											gap="0"
											align="flex-start"
											mb="xs"
										>
											<TextButton href="https://www.google.com/travel/flights/search?tfs=CBwQAhojEgoyMDI1LTA1LTA4agwIAxIIL20vMGQzNXlyBwgBEgNQU1AaIxIKMjAyNS0wNS0xMWoHCAESA1BTUHIMCAMSCC9tLzBkMzV5QAFIAXABggELCP___________wGYAQE">
												<FontAwesomeIcon
													icon={faPlane}
													className={styles.icon}
												/>
												Flights
											</TextButton>
											<TextButton href="https://www.google.com/maps/dir/Phoenix/Palm+Springs,+CA/@33.4387746,-116.9486963,1331358m/data=!3m1!1e3!4m14!4m13!1m5!1m1!1s0x872b12ed50a179cb:0x8c69c7f8354a1bac!2m2!1d-112.0740373!2d33.4483771!1m5!1m1!1s0x80db1ad4ffdbe5b3:0xa1e56987c2ed797c!2m2!1d-116.5452921!2d33.8302961!3e0?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D">
												<FontAwesomeIcon
													icon={faCar}
													className={styles.icon}
												/>{" "}
												Driving directions
											</TextButton>
										</Stack>
									</AccordionPanel>
								</AccordionItem>
								<AccordionItem key="SD" value="SD">
									<AccordionControl>
										Coming from... San Diego?
									</AccordionControl>
									<AccordionPanel>
										<Text>
											Doug and Kara are each driving a car
											to Palm Springs. If you&rsquo;d like
											to make the 2 hour road trip with
											us, there are 5&ndash;7 available
											seats between 2 cars.
										</Text>
										<Text>
											Keep in mind you will have to fly
											into/out of San Diego (SAN), and
											you&rsquo;ll be on our schedule to
											arrive and leave.
										</Text>
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						</section>
						<section>
							<Title order={4}>Weather in Palm Springs</Title>
							<Text>
								Typical weather in Palm Springs in May is high
								of 95&deg; and low of 60&deg; at night. Please
								be mindful that we will be in a desert so
								sunscreen is important and stay hydrated.
								<br />
								<TextButton href="https://www.accuweather.com/en/us/palm-springs/92262/may-weather/331971?year=2025">
									<FontAwesomeIcon
										icon={faSun}
										className={styles.icon}
									/>
									Check the forecast
								</TextButton>
							</Text>
						</section>
						<section>
							<Title order={4}>The Venue</Title>
							<SimpleGrid cols={3} spacing="xs">
								<Image
									alt="Street view"
									src={"static/images/bitchelor_house_1.webp"}
									className="image-dimmed"
								/>
								<Image
									alt="Great room"
									src={"static/images/bitchelor_house_4.webp"}
									className="image-dimmed"
								/>
								<Image
									alt="Pool area"
									src={"static/images/bitchelor_house_3.webp"}
									className="image-dimmed"
								/>
							</SimpleGrid>
							<Text size="xs" mt="xs">
								<a
									href="https://www.airbnb.com/rooms/19929295?source_impression_id=p3_1732481801_P3-crxIxwHKTkBMs"
									target="_blank"
								>
									See more photos in the full listing
								</a>
							</Text>
							<Title order={5}>Check-In/Check-Out</Title>
							<Text>
								Check in after 3:00 PM on 5/8. Check out after
								11:00 AM on 5/11.
							</Text>
							<Title order={5}>Sleeping Arrangements</Title>
							<Text>
								The house has 8 beds across 6 bedrooms.
								We&rsquo;re sorting out who will go where, but
								if you have any special requests, please let
								Jeff know via DM.
							</Text>
							<Title order={5}>Amenities</Title>
							<Text>The house has:</Text>
							<Text component="ul" ml="sm">
								<li>
									Hot tub &amp; pool (bring your swimwear)
								</li>
								<li>Outdoor shower</li>
								<li>WiFi</li>
								<li>Free parking</li>
								<li>Sonos sound system</li>
								<li>Board games</li>
								<li>Washer/dryer</li>
								<li>Central A/C</li>
								<li>Fireplace & firepit</li>
								<li>Full kitchen</li>
								<li>EV charger</li>
							</Text>
						</section>
						<section>
							<Title order={4}>Other Fun Things</Title>
							<Title order={5}>Food</Title>
							<Text>
								A survey for food/snacks/drinks will be sent out
								closer to the date for preferences. Even if
								we&rsquo;re already aware, please let us know
								specifics on your dietary restrictions.
							</Text>
							<Title order={5}>Shenanigans</Title>
							<Text>
								Theme nights and activities will be planned.
								Prepare accordingly.
							</Text>
							<Title order={5}>House Rules</Title>
							<Text>
								<s>wait that&rsquo;s not a fun thing</s>
							</Text>
							<Text>
								Quiet hours are from 10:00 PM&mdash;8:00 AM.
								Like seriously, don&rsquo;t make any noise
								outside at night.
							</Text>
							<Text>
								Outdoor music is not permitted at any time of
								day. However, we&rsquo;ll be blasting{" "}
								<a
									href="https://www.youtube.com/watch?v=fmC6b6_ovZY"
									target="_blank"
								>
									Disease
								</a>{" "}
								on repeat indoors throughout our stay.
							</Text>
						</section>
					</Stack>
					<Image
						alt="Doug and Jeff dancing with friends in the DR post-engagement, photo credit: Adolfo Florentino"
						src={"static/images/engagement_dancing.jpg"}
						className="image-dimmed"
						hiddenFrom="sm"
					/>
				</GridCol>
			</Grid>
		</>
	);
};

export default BitchelorParty;
