import { useForm } from "vee-validate";
import type { CreateUserInterface } from "~/types/user.interface";
import useApi from "~/composables/base/api";
import useRegisterForm from "~/composables/auth/useRegisterForm";

interface UseRegisterInterface {
  register: () => void;
  isSubmitting: Ref<boolean>
}

export const useRegister = (): UseRegisterInterface => {
  const router = useRouter();
  const api = useApi();
  const registerForm = useRegisterForm();
  const { handleSubmit, setErrors, isSubmitting } = useForm<CreateUserInterface>(registerForm);

  const register = handleSubmit(async (values) => {
    const { error } = await api("/auth/register").post({ ...values });

    if (!error?.value?.data) {
      router.push("/");
      return;
    }

    if (error.value.data.errors) {
      setErrors(error.value.data.errors);
    }
  });

  return { register, isSubmitting };
};
