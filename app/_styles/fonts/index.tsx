import localFont from "next/font/local";

const fontMrsEaves = localFont({
	src: "./mrs-eaves/MrsEavesRoman.woff2",
});

const fontBrandonGrotesque = localFont({
	src: [
		{
			path: "./brandon-grotesque/Brandon_thin.otf",
			weight: "200",
			style: "normal",
		},
		{
			path: "./brandon-grotesque/Brandon_thin_it.otf",
			weight: "200",
			style: "italic",
		},
		{
			path: "./brandon-grotesque/Brandon_light.otf",
			weight: "300",
			style: "normal",
		},
		{
			path: "./brandon-grotesque/Brandon_light_it.otf",
			weight: "300",
			style: "italic",
		},
		{
			path: "./brandon-grotesque/Brandon_reg.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./brandon-grotesque/Brandon_reg_it.otf",
			weight: "400",
			style: "italic",
		},
		{
			path: "./brandon-grotesque/Brandon_bld.otf",
			weight: "700",
			style: "normal",
		},
		{
			path: "./brandon-grotesque/Brandon_bld_it.otf",
			weight: "700",
			style: "italic",
		},
		{
			path: "./brandon-grotesque/Brandon_blk.otf",
			weight: "900",
			style: "normal",
		},
		{
			path: "./brandon-grotesque/Brandon_blk_it.otf",
			weight: "900",
			style: "italic",
		},
	],
});

export const FONTS = {
	BRANDON_GROTESQUE: fontBrandonGrotesque,
	MRS_EAVES: fontMrsEaves,
};
