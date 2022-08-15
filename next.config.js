/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        LOCAL_URL: "https://nature-next-app.herokuapp.com",
    },
}

module.exports = nextConfig
