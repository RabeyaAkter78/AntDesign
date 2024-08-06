import withLess from "next-with-less";

/** @type {import('next').NextConfig} */
const nextConfig = withLess({
  reactStrictMode: true,
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        "@primary-color": "#1890ff",
      },
      javascriptEnabled: true,
    },
  },
});

export default nextConfig;
