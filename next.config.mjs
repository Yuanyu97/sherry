/** @type {import('next').NextConfig} */
const nextConfig = {
    metadataBase: new URL("for-sherry.netlify.app"), // Replace with your actual domain
    trailingSlash: true,
    images: {
      unoptimized: true, // Required if you don't use a dedicated image optimizer (for static hosting)
    },
  };
  
  export default nextConfig;