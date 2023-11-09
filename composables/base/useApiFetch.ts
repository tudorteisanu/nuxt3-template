export const useApiFetch = async (url: string, options = {}) => {
  const { accessToken } = storeToRefs(useAuthStore());
  const headers = ref({});

  if (accessToken.value) {
    headers.value = {
      Authorization: `Bearer ${accessToken.value}`,
    };
  }

  const response = await fetch(toValue(`http://localhost:5001${url}`), {
    headers: {
      ...headers.value,
      "content-type": "application/json",
    },
    ...options,
  });

  if (response.ok) {
    return await response.json();
  }

  throw await response.json();
};
