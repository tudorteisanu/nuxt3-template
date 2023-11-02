import { useForm } from "vee-validate";
import type { Ref } from "vue";
import type { UserInterface } from "~/types";
import useCreateUserForm from "~/composables/users/useCreateUserForm";
import useApi from "~/composables/base/api";

interface UseFetchUserInterface {
  createUser: () => void;
  isSubmitting: Ref<boolean>
}

export const useCreateUser = (): UseFetchUserInterface => {
  const createUserForm = useCreateUserForm();
  const { handleSubmit, isSubmitting } = useForm<UserInterface>(createUserForm);
  const api = useApi();
  const store = useUsersStore();
  const router = useRouter();

  const createUser = handleSubmit(async (values) => {
    const { data } = await api("/users").post(values);

    store.addUser(data.value);
    router.push("/users");
  });

  return { createUser, isSubmitting };
};
