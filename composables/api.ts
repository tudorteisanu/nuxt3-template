const useApi = (): any => {
  const { public: { apiUrl } } = useRuntimeConfig();

  const get = (url: string, query: Record<string, any>) => {
    return useFetch(url, {
      baseURL: apiUrl as string,
      query,
      key: url,
      method: "GET",
    });
  };

  const post = (url: string, body: object) => {
    return useFetch(url, {
      body,
      key: url,
      baseURL: apiUrl as string,
      method: "POST",
    });
  };

  const put = (url: string, body: object) => {
    return useFetch(url, {
      body,
      key: url,
      baseURL: apiUrl as string,
      method: "PUT",
    });
  };

  const patch = (url: string, body: object) => {
    return useFetch(url, {
      body,
      key: url,
      baseURL: apiUrl as string,
      method: "PATCH",
    });
  };

  const remove = (url: string, query: Record<string, any>) => {
    return useFetch(url, {
      query,
      key: url,
      baseURL: apiUrl as string,
      method: "DELETE",
    });
  };

  return { get, post, put, patch, delete: remove };
};

export default useApi;
