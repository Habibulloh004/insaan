// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     formats: ["image/webp"],
//   },
// };

// export default nextConfig;
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  images: {
    formats: ["image/webp"],
  },
  webpack: (config) => {
    config.resolve.preferRelative = true;
    return config;
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
