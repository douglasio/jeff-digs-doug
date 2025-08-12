"use client";
import { Container } from "@mantine/core";
import Script from "next/script";

export const RSVP = () => {
	return (
		<Script
			type="text/javascript"
			src="https://dougandjeffswedding.rsvpify.com/embed"
		/>
	);
};
