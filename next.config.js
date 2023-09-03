/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
				pathname: "/**",
				port: "",
			},
		],
	},
	experimental: {
		serverActions: true,
	},
};

module.exports = nextConfig;
