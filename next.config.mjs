/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'www.jointaro.com',
      }
    ],
  }
};

export default nextConfig;
