/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        LOCAL_URL: "http://localhost:3000",
    },
}

module.exports = nextConfig
