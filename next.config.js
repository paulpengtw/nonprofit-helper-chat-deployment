/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/github",
        destination: "https://github.com/g0v",
        permanent: true,
      },
      {
        source: "/deploy",
        destination: "https://g0v.hackmd.io/@nonprofit-helper/nonprofit-helper-home",
        permanent: true,
      },
      {
        source: "/g0v",
        destination: "https://sch001.g0v.tw",
        permanent: true,
      },
    ];
  },
  env: {
    REACT_APP_ASSISTANT_ID: process.env.REACT_APP_ASSISTANT_ID,
  },
};

module.exports = nextConfig;