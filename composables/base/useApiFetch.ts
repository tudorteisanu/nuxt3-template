export const useApiFetch = async (url: string, options = {}) => {
  const { accessToken } = storeToRefs(useAuthStore());
  const headers = ref({});

  if (accessToken.value) {
    headers.value = {
      Authorization: `Bearer ${accessToken.value}`,
    };
  }

  return await fetch(toValue(`http://localhost:5001${url}`), {
    headers: {
      ...headers.value,
      "content-type": "application/json",
    },
    ...options,
  }).then(data => data.json());
};
