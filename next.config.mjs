/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for Netlify hosting
  },
};

export default nextConfig;