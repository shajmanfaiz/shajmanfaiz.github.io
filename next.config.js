const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/shajmanfaiz.github.io/' : '',
   images: {
    loader: 'imgix',
    path: '',
  },
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
};
