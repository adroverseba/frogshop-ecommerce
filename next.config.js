/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
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

module.exports = nextConfig;
