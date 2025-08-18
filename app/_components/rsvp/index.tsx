"use client";

import { useEffect, useRef } from "react";

export const RSVP = () => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (ref.current) {
			const script = document.createElement("script");
			script.src = "https://jeffdigsdoug.rsvpify.com/embed";
			script.async = true;
			// tell RSVPify where to inject
			ref.current.appendChild(script);
		}
	}, []);
	return <div ref={ref}></div>;
};
