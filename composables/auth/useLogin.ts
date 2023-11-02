import { useForm } from "vee-validate";
import type { CreateUserInterface } from "~/types/user.interface";
import useApi from "~/composables/base/api";
import { useAuthStore } from "~/stores/auth";
import useLoginForm from "~/composables/auth/useLoginForm";

interface UseLoginInterface {
  login: () => void;
  isSubmitting: Ref<boolean>;
}

export const useLogin = (): UseLoginInterface => {
  const router = useRouter();
  const store = useAuthStore();
  const api = useApi();
  const loginForm = useLoginForm();
  const { handleSubmit, setErrors, isSubmitting } = useForm<CreateUserInterface>(loginForm);

  const login = handleSubmit(async (values) => {
    const { data, error } = await api("/auth/login").post(values).json();

    if (data.value) {
      store.login(data.value);
      router.push("/");
      return;
    }

    if (error?.value?.data?.errors) {
      setErrors(error.value.data.errors);
    }
  });

  return { login, isSubmitting };
};
