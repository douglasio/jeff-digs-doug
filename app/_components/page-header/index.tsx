import { Grid, GridCol, Image, Title } from "@mantine/core";
import { Transition } from "_components";
import classes from "./index.module.css";

type PageHeaderProps = {
	title: string | React.ReactNode;
	image: string;
};

export const PageHeader = ({ title, image }: PageHeaderProps) => {
	return (
		<Grid gutter={"sm"} align="flex-end" className={classes.pageHeader}>
			<GridCol span={7}>
				<Transition
					mounted={false}
					content={
						<Image
							alt="Willowdale front of house in the fall, photo credit: Mark Spooner"
							src={image}
							fit="cover"
							mah="50vh"
							className="image-overlay"
						/>
					}
				/>
			</GridCol>
			<GridCol span={4}>
				<Title order={1}>{title}</Title>
			</GridCol>
		</Grid>
	);
};
