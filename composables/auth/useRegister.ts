import { useForm } from "vee-validate";
import { CreateUserInterface } from "~/types/user.interface";
import useApi from "~/composables/api";
import registerForm from "~/settings/forms/registerForm";

interface UseRegisterInterface {
  register: () => void;
  isSubmitting: Ref<boolean>
}

export const useRegister = (): UseRegisterInterface => {
  const router = useRouter();
  const api = useApi();
  const { handleSubmit, setErrors, isSubmitting } = useForm<CreateUserInterface>(registerForm);

  const register = handleSubmit(async (values) => {
    const { error } = await api.post("/auth/register", { ...values, roles: ["user"] });

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
