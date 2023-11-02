import useApi from "~/composables/base/api";

export const useFetchUserById = (): Function => {
  const api = useApi();

  return async (id: string) => {
    try {
      return await api(`/users/${id}`).json();
    }
    catch (e: any) {
      console.log(e);
    }
  };
};
