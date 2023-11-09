import { useForm } from "vee-validate";
import type { Ref } from "vue";
import type { CreateUserInterface } from "~/types";
import { createUserForm } from "~/settings";

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

  const { handleSubmit, isSubmitting } = useForm<CreateUserInterface>(createUserForm);
  const { addUser } = useUsersStore();
  const router = useRouter();

  const createUser = handleSubmit(async (values) => {
    const { error } = await addUser(values);

    if (error.value) {
      return;
    }
    router.push("/users");
  });

  return { createUser, isSubmitting };
};
