/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.imaratgroup.uz',
        port: '',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};
