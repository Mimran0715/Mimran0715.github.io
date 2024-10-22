/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/mimran0715/github.io",
  
  images: {
    unoptimized: true,
  },

  // No need for custom Webpack configuration for CSS
};

export default nextConfig;
