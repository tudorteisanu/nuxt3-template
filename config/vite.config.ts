const viteConfig = {
  define: {
    "process.env.DEBUG": false,
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: "@import \"@/assets/scss/_variables.scss\";",
      },
    },
  },
};

export default viteConfig;
