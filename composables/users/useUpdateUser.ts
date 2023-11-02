import { useForm } from "vee-validate";
import type { Ref } from "vue";
import type { UserInterface } from "~/types";
import useEditUserFrom from "~/composables/users/useEditUserForm";
import useApi from "~/composables/base/api";
import { useFetchUserById } from "~/composables/users/useFetchUserById";

interface UseFetchUserInterface {
  updateUser: () => void;
  fetchUser: (id: string) => Promise<void>;
  isSubmitting: Ref<boolean>
}

export const useUpdateUser = (): UseFetchUserInterface => {
  const editUserForm = useEditUserFrom();
  const { handleSubmit, isSubmitting, setValues } = useForm<UserInterface>(editUserForm);
  const api = useApi();
  const store = useUsersStore();
  const fetchUserById = useFetchUserById();

  const fetchUser = async (id: string) => {
    const { data } = await fetchUserById(id);
    setValues(data.value);
  };

  const updateUser = handleSubmit(async (values) => {
    const { data } = await api(`/users/${values.id}`).patch(values);

    store.updateUser(data.value.id, data.value);
  });

  return { fetchUser, updateUser, isSubmitting };
};
