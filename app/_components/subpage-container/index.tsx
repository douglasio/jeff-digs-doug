import { Container, ContainerProps } from "@mantine/core";
import { contentAreaProps } from "_util";

export const SubpageContainer = ({ children, ...props }: ContainerProps) => {
	return (
		<Container w="100%" {...contentAreaProps} {...props}>
			{children}
		</Container>
	);
};

