import nextIntlPlugin from "next-intl/plugin";

/**
 * Pass any configuration to next-intl if you like, e.g.
 * `nextIntlPlugin('./i18n')`, but by default it looks for i18n files in `/messages`.
 */
const withNextIntl = nextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "*/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
