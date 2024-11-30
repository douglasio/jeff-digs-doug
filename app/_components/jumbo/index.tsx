import { Title } from "@mantine/core";
import classes from "./index.module.css";

type JumboProps = {
	children: React.ReactNode;
	size?: "xs" | "sm" | "md" | "lg" | "xl";
};

export const Jumbo = ({ children, size = "sm" }: JumboProps) => {
	return (
		<Title className={classes.jumbo} data-size={size}>
			{children}
		</Title>
	);
};
