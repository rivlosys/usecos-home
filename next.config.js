/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Mortgage Subdomain
      { source: '/', has: [{ type: 'host', value: 'mortgage.usecos.app' }], destination: 'https://usecos.app/mortgage', permanent: true },
      { source: '/:path*', has: [{ type: 'host', value: 'mortgage.usecos.app' }], destination: 'https://usecos.app/mortgage/:path*', permanent: true },
      
      // Pay Subdomain
      { source: '/', has: [{ type: 'host', value: 'pay.usecos.app' }], destination: 'https://usecos.app/pay', permanent: true },
      { source: '/:path*', has: [{ type: 'host', value: 'pay.usecos.app' }], destination: 'https://usecos.app/pay/:path*', permanent: true },
      
      // VIN Subdomain
      { source: '/', has: [{ type: 'host', value: 'vin.usecos.app' }], destination: 'https://usecos.app/vin', permanent: true },
      { source: '/:path*', has: [{ type: 'host', value: 'vin.usecos.app' }], destination: 'https://usecos.app/vin/:path*', permanent: true },
      
      // GST Subdomain
      { source: '/', has: [{ type: 'host', value: 'gst.usecos.app' }], destination: 'https://usecos.app/gst', permanent: true },
      { source: '/:path*', has: [{ type: 'host', value: 'gst.usecos.app' }], destination: 'https://usecos.app/gst/:path*', permanent: true },

      // Legacy Blog Redirects
      { source: '/blog/:slug.html', destination: '/blog/:slug', permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'usecos.app' },
    ],
  },
};

module.exports = nextConfig;