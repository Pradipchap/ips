// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://202.51.83.225/api/v1/:path*/"
      }
    ];
  }
};

module.exports = nextConfig;
