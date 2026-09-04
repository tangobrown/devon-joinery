/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.devonjoinery.co.uk" },
    ],
  },
};

export default nextConfig;
