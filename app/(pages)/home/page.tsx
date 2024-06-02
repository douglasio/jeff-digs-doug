import React from "react";
import { Button, Flex, Grid, GridCol, Image, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

export const metadata = {
	title: "Home",
};

const Home = () => {
	return (
		<Grid>
			<GridCol span={{ base: 12, md: 8 }}>
				<Image
					className="image-overlay"
					alt="One of our engagement photos on the beach in the DR"
					fit="cover"
					w={"100%"}
					h="100vh"
					mih="500"
					mt="-xl"
					mb="-xl"
					src="static/images/engagement_1.jpg"
					loading="lazy"
				/>
			</GridCol>
			<GridCol span={{ base: 12, md: 4 }}>
				<Flex
					direction="column"
					justify="flex-end"
					align="stretch"
					h="100%"
				>
					<div>
						<Text mb="xl" fs="italic" size="lg">
							Welcome to the wedding of Jeff and Doug, where two
							people who love each other are finally getting
							married. No, they&rsquo;re not related. That&rsquo;s
							what makes it so special.
						</Text>
						<Button rightSection={<IconChevronRight />}>
							See how we got here
						</Button>
					</div>
				</Flex>
			</GridCol>
		</Grid>
	);
};

export default Home;
