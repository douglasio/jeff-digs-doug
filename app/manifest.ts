import { MetadataRoute } from "next";
import { COLORS } from "_styles";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Doug & Jeff's Wedding",
		short_name: "D&J",
		description:
			"Doug and Jeff are getting married on November 8, 2025 at The Willowdale Estate in Topsfield, MA",
		start_url: "/",

		theme_color: COLORS.SAGE[9],
		background_color: COLORS.BLUE[9],
		display: "standalone",

		icons: [
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon",
				purpose: "maskable",
			},
			{
				src: "/favicon-16x16.png",
				sizes: "16x16",
				type: "image/png",
				purpose: "maskable",
			},
			{
				src: "/favicon-32x32.png",
				sizes: "32x32",
				type: "image/png",
				purpose: "maskable",
			},
			{
				src: "/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "maskable",
			},
			{
				src: "/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "maskable",
			},
			{
				src: "/apple-touch-icon.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "maskable",
			},
			{
				src: "/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "maskable",
			},
		],
	};
}
