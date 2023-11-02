const viteConfig = {
  define: {
    "process.env.DEBUG": false,
  },
  ssr: {
    noExternal: ["vuetify"],
  },
  css: {
    devSourcemap: true,
  },
};

export default viteConfig;
