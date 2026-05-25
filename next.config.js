/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Subdomain to Path redirects (Handled via host detection if on Vercel/Cloudflare)
      // Note: DNS for subdomains must point to the same Next.js deployment
      {
      { source: '/mortgage', has: [{ type: 'host', value: 'mortgage.usecos.app' }], destination: 'https://usecos.app/mortgage', permanent: true },
      { source: '/pay', has: [{ type: 'host', value: 'pay.usecos.app' }], destination: 'https://usecos.app/pay', permanent: true },
      { source: '/vin', has: [{ type: 'host', value: 'vin.usecos.app' }], destination: 'https://usecos.app/vin', permanent: true },
      { source: '/gst', has: [{ type: 'host', value: 'gst.usecos.app' }], destination: 'https://usecos.app/gst', permanent: true },
      { source: '/blog/:slug', destination: '/blog/:slug', permanent: true }
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'pay.usecos.app' }],
        destination: 'https://usecos.app/pay/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'vin.usecos.app' }],
        destination: 'https://usecos.app/vin/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'gst.usecos.app' }],
        destination: 'https://usecos.app/gst/:path*',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'usecos.app' },
    ],
  },
};

module.exports = nextConfig;