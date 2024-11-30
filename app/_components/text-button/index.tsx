import React from "react";
import { Button, type ButtonProps } from "@mantine/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.css";

interface TextButtonProps extends ButtonProps {
	href: string;
	icon?: IconDefinition;
}

export const TextButton = ({ children, href, icon }: TextButtonProps) => (
	<Button
		component="a"
		href={href}
		p="0"
		m="0"
		target="_blank"
		variant="transparent"
	>
		{icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}
		{children}
	</Button>
);
