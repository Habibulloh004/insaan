import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  images: {
    formats: ["image/webp"],
  },
  webpack: (config) => {
    return config;
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
