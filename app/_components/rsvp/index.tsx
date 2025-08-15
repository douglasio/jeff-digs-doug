"use client";

import { useEffect, useRef } from "react";

export const RSVP = () => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (ref.current) {
			const script = document.createElement("script");
			script.src = "https://dougandjeffswedding.rsvpify.com/embed";
			script.async = true;
			// tell RSVPify where to inject
			ref.current.appendChild(script);
		}
	}, []);
	return (
		<div ref={ref}></div>
		// <iframe
		// 	src="https://dougandjeffswedding.rsvpify.com"
		// 	style={{ width: "100%", height: "100%", border: "none" }}
		// 	scrolling="auto"
		// />
	);
};
