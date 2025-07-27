import React from "react";
import { SVG } from "_components";
import { COLORS } from "_styles";
import classes from "./layout.module.css";

export default function PageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main id="main" className={classes.main}>
			<>
				<SVG.CenterLeaves
					direction="down"
					color={COLORS.NAVY[9]}
					className={classes.backgroundLeaves}
				/>
				{children}
			</>
		</main>
	);
}
