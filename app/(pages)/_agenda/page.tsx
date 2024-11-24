import React from "react";
import { IntroText, Nav } from "_components";
import { Grid, GridCol, Image, Stack, Text, Title } from "@mantine/core";
import { FONTS } from "_styles";

const Agenda = () => {
	return (
		<>
			{/* <Nav center={true} showLogo={true} /> */}
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
				<GridCol span={{ base: 12, sm: 6 }}></GridCol>
			</Grid>
		</>
	);
};

export default Agenda;
