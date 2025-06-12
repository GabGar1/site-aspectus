/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['rc-util/es'] = 'rc-util/lib';
    config.resolve.alias['rc-picker/es'] = 'rc-picker/lib';
    return config;
  },
};

module.exports = nextConfig;