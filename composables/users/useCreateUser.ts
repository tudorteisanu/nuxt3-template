import { useForm } from "vee-validate";
import type { Ref } from "vue";
import useCreateUserForm from "./useCreateUserForm";
import type { CreateUserInterface } from "~/types";

interface UseFetchUserInterface {
  createUser: () => void;
  isSubmitting: Ref<boolean>
}

export const useCreateUser = (): UseFetchUserInterface => {
  definePageMeta({
    middleware: ["auth"],
  });
  useHead({
    title: "Create User",
  });

  const createUserForm = useCreateUserForm();
  const { handleSubmit, isSubmitting } = useForm<CreateUserInterface>(createUserForm);
  const { addUser } = useUsersStore();
  const router = useRouter();

  const createUser = handleSubmit(async (values) => {
    await addUser(values);
    router.push("/users");
  });

  return { createUser, isSubmitting };
};
