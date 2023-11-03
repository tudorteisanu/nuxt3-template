import { useForm } from "vee-validate";
import useLoginForm from "./useLoginForm";
import type { LoginInterface } from "~/types/login.interface";
import { useAuth } from "~/composables";

interface UseLoginInterface {
  loginUser: () => void;
  isSubmitting: Ref<boolean>;
}

export const useLogin = (): UseLoginInterface => {
  const router = useRouter();
  const { login } = useAuth();
  const loginForm = useLoginForm();
  const { handleSubmit, isSubmitting } = useForm<LoginInterface>(loginForm);

  const loginUser = handleSubmit(async (values: LoginInterface) => {
    await login(values);
    router.push("/");
  });

  return { loginUser, isSubmitting };
};
