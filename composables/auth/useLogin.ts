import { useForm } from "vee-validate";
import { CreateUserInterface } from "~/types/user.interface";
import useApi from "~/composables/api";
import loginFrom from "~/settings/forms/loginForm";
import { useAuthStore } from "~/stores/auth";

interface UseLoginInterface {
  login: () => void;
  isSubmitting: Ref<boolean>;
}

export const useLogin = (): UseLoginInterface => {
  const router = useRouter();
  const store = useAuthStore();
  const api = useApi();

  const { handleSubmit, setErrors, isSubmitting } = useForm<CreateUserInterface>(loginFrom);

  const login = handleSubmit(async (values) => {
    const { data, error } = await api.post("/auth/login", { ...values, roles: ["user"] });

    if (data.value) {
      store.login(data.value);
      router.push("/");
      return;
    }

    if (error.value.data.errors) {
      setErrors(error.value.data.errors);
    }
  });

  return { login, isSubmitting };
};
