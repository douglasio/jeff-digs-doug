import localFont from "next/font/local";

const fontMrsEaves = localFont({
  src: "./mrs-eaves/MrsEavesRoman.woff2",
});

const fontBrandonGrotesque = localFont({
  src: "./brandon-grotesque/Brandon_reg.otf",
});

export const FONTS = {
  BRANDON_GROTESQUE: fontBrandonGrotesque,
  MRS_EAVES: fontMrsEaves,
};
