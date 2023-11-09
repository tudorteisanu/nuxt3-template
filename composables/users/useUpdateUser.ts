import { useForm } from "vee-validate";
import type { Ref } from "vue";
import type { UserInterface } from "~/types";
import { useUsersStore } from "~/stores";
import { editUserForm } from "~/settings";

interface UseFetchUserInterface {
  updateUser: () => void;
  isSubmitting: Ref<boolean>
}

export const useUpdateUser = (): UseFetchUserInterface => {
  definePageMeta({
    middleware: ["auth"],
  });
  useHead({
    title: "Edit user",
  });

  const route = useRoute();
  const { handleSubmit, isSubmitting, setValues } = useForm<UserInterface>(editUserForm);
  const { updateUserById, fetchUserById } = useUsersStore();

  onBeforeMount(async () => {
    const user = await fetchUserById(route.params.id);
    setValues(user);
  });

  const updateUser = handleSubmit(async (values) => {
    await updateUserById(values.id, values);
  });

  return { updateUser, isSubmitting };
};
