import { createFetch } from "@vueuse/core";

const useApi = (): any => {
  const { public: { apiUrl } } = useRuntimeConfig();
  const store = useAuthStore();
  const { token } = storeToRefs(store);

  return createFetch({
    baseUrl: apiUrl as string,
    options: {
      beforeFetch({ options }) {
        if (token) {
          options.headers = {
            ...options.headers,
            Authorization: `Bearer ${token.value}`,
          };
        }

        return {
          options,
        };
      },
      onFetchError: (error) => {
        if (error.response?.status === 401) {
          store.logout();
        }

        return error;
      },
    },
  });
};

export default useApi;
