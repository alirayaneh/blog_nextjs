/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.amoza.ir'
            }
        ]
    },
    output: 'standalone'
};

export default nextConfig;
