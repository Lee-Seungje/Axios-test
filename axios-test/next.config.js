/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  transpilePackages: ["common", "api"],

  rewrites: async () => [
    {
      source: "/api/:path*",
      destination: `https://openapi.naver.com/v1/vision/celebrity/:path*`,
    },
  ],
};

module.exports = nextConfig;
