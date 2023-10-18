import { useForm } from "vee-validate";
import { Ref } from "vue";
import { CreateUserInterface, UserInterface } from "~/types";
import editUserForm from "~/settings/forms/editUserForm";

interface UseFetchUserInterface {
  fetchUser: (id: number) => void;
  updateUser: () => void;
  isSubmitting: Ref<boolean>
}

export const useUpdateUser = (): UseFetchUserInterface => {
  const { handleSubmit, isSubmitting, setValues } = useForm<CreateUserInterface>(editUserForm);

  const fetchUser = async (id: number) => {
    const item: UserInterface = await $fetch(`http://localhost:3000/api/users/${id}`);

    setValues(item);
  };

  const updateUser = handleSubmit((values) => {
    console.log(values);
  });

  return { fetchUser, updateUser, isSubmitting };
};
