// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
	output: "export",
};

module.exports = {
	async redirects() {
		return [
			{
				source: "/",
				destination: "/who-are-you",
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;
