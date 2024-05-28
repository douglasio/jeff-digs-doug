import React from "react";
import { Button, Flex, Grid, GridCol, Image, Text } from "@mantine/core";

const Home = () => {
	return (
		<Grid>
			<GridCol span={{ base: 12, md: 6 }}>
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
				/>
			</GridCol>
			<GridCol span={{ base: 12, md: 6 }}>
				<Flex
					direction="column"
					justify="flex-end"
					align="stretch"
					h="100%"
				>
					<div>
						<Text mb="xl" fw="200" fs="normal" size="lg">
							Welcome to the wedding of Jeff and Doug, where two
							people who love each other are finally getting
							married. No, they&rsquo;re not related. That&rsquo;s
							what makes it so special.
						</Text>
						<Button rightSection={"&gt;"}>
							See how we got here
						</Button>
					</div>
				</Flex>
			</GridCol>
		</Grid>
	);
};

export default Home;
