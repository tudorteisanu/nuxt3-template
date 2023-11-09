import { useForm } from "vee-validate";
import { loginForm } from "~/settings";
import type { LoginInterface } from "~/types/login.interface";
import { useAuth } from "~/composables";

interface UseLoginInterface {
  loginUser: () => void;
  isSubmitting: Ref<boolean>;
}

export const useLogin = (): UseLoginInterface => {
  const router = useRouter();
  const { login } = useAuth();
  const { handleSubmit, isSubmitting } = useForm<LoginInterface>(loginForm);

  const loginUser = handleSubmit(async (values: LoginInterface) => {
    try {
      await login(values);
      router.push("/");
    }
    catch (e: any) {
      alert(e.error);
    }
  });

  return { loginUser, isSubmitting };
};
