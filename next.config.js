/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/mimran0715/github.io",
  
    images: {
      unoptimized: true,
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      });
      return config;
    },
  };
  
  export default nextConfig;