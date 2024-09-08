/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    basePath: '/project-management',
    env: {
        BASE_URL: process.env.NEXT_PUBLIC_BASEURL,
    }, 
    experimental: {
        serverActions: {
          allowedOrigins: ['trailblazersolutions.dev', '*.trailblazersolutions.dev', 'milescatlett.com', 'milescatlett.info'],
        },
      },
};
export default nextConfig;


