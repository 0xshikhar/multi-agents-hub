/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  transpilePackages: ['@multiversx/sdk-dapp'],
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    config.externals.push('pino-pretty', 'lokijs', 'encoding', {
      bufferutil: 'bufferutil',
      'utf-8-validate': 'utf-8-validate'
    });

    return config;
  },
  images: {
    domains: [
      'cryptologos.cc',
      'pbs.twimg.com',
      'i.imgur.com',
      'images.unsplash.com',
      'utfs.io',
      'ui-avatars.com',
      'cdn.discordapp.com',
    ],
  },
};

module.exports = nextConfig;
