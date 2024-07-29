/**
 * @type {import('next').NextConfig}
 */

const path = require('path');

const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mov|mp4)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'public/videos',
            publicPath: 'public/videos',
          },
        },
      ],
    });

    return config;
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
