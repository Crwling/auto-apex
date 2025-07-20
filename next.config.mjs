import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData: `$var: red;`,
  },
};

export default withNextIntl(nextConfig);
