// plugins/vuetify.js
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { VDataTableServer, VDataTable } from "vuetify/labs/components";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components: {
      ...components,
      VDataTableServer,
      VDataTable,
    },
    directives,
  });

  nuxtApp.vueApp.use(vuetify);
});
