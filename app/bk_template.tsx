// app/template.tsx
"use client";
// import { motion } from "motion/react";

// const variants = {
// 	hidden: { opacity: 0, x: -200, y: 0 },
// 	enter: { opacity: 1, x: 0, y: 0 },
// };

export default function Template({ children }: { children: React.ReactNode }) {
	return children;
	// return (
	// 	<motion.div
	// 		variants={variants}
	// 		initial="hidden"
	// 		animate="enter"
	// 		transition={{ ease: "easeIn" }}
	// 	>
	// 		{children}
	// 	</motion.div>
	// );
}
