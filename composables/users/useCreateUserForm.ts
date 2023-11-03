import { useValidation } from "~/composables";

const useCreateUserForm = () => {
  const validation = useValidation();

  return {
    validationSchema:
      validation.object({
        email: validation.string().required().email(),
        username: validation.string().required().min(2).max(128),
        bio: validation.string().min(10).max(512),
      }),
  };
};

export default useCreateUserForm;
