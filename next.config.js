/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // env: {
  //   customKey: 'customValue',
  // },
  // basePath: '/dist',    //se comenta esta linea para evitar el error 404
  // compress: true,
  async redirects() {
    return [
      {
        source: '/hola',
        destination: 'https://github.com/adroverseba',
        permanent: true,
      },
    ];
  },
};
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
});

module.exports = withPWA(nextConfig);
