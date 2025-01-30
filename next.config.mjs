/** @type {import('next').NextConfig} */
const nextConfig = {
    metadataBase: new URL("https://for-sherry.netlify.app"), // Add 'https://'
    trailingSlash: true,
    images: {
      unoptimized: true, // Required for Netlify hosting
    },
  };
  
  export default nextConfig;