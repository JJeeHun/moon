/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/moon',
    distDir: 'build',
    images: {
        domains: ['static.wixstatic.com'],
    },
};

export default nextConfig;
