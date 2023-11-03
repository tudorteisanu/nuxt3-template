import { useForm } from "vee-validate";
import useRegisterForm from "./useRegisterForm";
import type { CreateUserInterface } from "~/types/user.interface";
import { useAuth } from "~/composables";

interface UseRegisterInterface {
  register: () => void;
  isSubmitting: Ref<boolean>
}

export const useRegister = (): UseRegisterInterface => {
  const router = useRouter();
  const { register: createUser } = useAuth();
  const registerForm = useRegisterForm();
  const { handleSubmit, setErrors, isSubmitting } = useForm<CreateUserInterface>(registerForm);

  const register = handleSubmit(async (values) => {
    try {
      await createUser(values);
      await router.push("/login");
    }
    catch (error: any) {
      if (error?.data?.errors) {
        setErrors(error.data.errors);
      }
    }
  });

  return { register, isSubmitting };
};
