/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.r2.dev'
            },
            {
                protocol: 'https',
                hostname: '**.vimeocdn.com'
            }
        ]
    }
};

export default nextConfig;
