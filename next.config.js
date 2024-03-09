/** @type {import('next').NextConfig} */
const path = require("path");
const withDotenv = require("next-runtime-dotenv");
module.exports = withDotenv({
  publicRuntimeConfig: {
    NEXT_PUBLIC_ROBOTS_TXT: process.env.NEXT_PUBLIC_ROBOTS_TXT,
  },
});
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imarat2.hypernova.uz',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
