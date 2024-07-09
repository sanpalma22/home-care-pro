/** @type {import('next').NextConfig} */
const nextConfig = {};

// next.config.mjs
export default {
    async redirects() {
      return [
        {
          source: '/casos',
          destination: '/casos/activos',
          permanent: true,
        },
      ]
    },
  }
  