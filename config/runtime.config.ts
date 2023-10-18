const runtimeConfig = {
  public: {
    sentryDsn: process.env.NUXT_PUBLIC_SENTRY_DSN,
    apiUrl: process.env.API_URL,
  },
};

export default runtimeConfig;
