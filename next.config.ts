import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'yarmiinfo.ru' }],
  },
};

export default nextConfig;
