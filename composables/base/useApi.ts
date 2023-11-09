import { createFetch } from "@vueuse/core";
import { AUTHORIZATION_HEADER, TOKEN_TYPE } from "~/constants";

export const useApi = (url: string) => {
  const { accessToken } = storeToRefs(useAuthStore());
  const { apiUrl } = useRuntimeConfig().public;
  const api = createFetch({
    baseUrl: apiUrl,
    combination: "chain",
    options: {
      immediate: true,
      beforeFetch({ options }) {
        const headers = options.headers || {} as Record<string, string>;

        if (accessToken.value) {
          options.headers = {
            ...headers,
            [AUTHORIZATION_HEADER]: `${TOKEN_TYPE} ${accessToken.value}`,
          };
        }
      },
    },
  });

  return api(url);
};
