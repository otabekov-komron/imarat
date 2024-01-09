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
    ignoreBuildErrors: true,
  },
};
