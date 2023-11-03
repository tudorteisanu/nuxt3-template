import { useValidation } from "~/composables";

const useEditUserFrom = () => {
  const validation = useValidation();

  return {
    validationSchema:
      validation.object({
        email: validation.string().required().email(),
        username: validation.string().required().min(2).max(128),
        bio: validation.string().required().min(10).max(512),
      }),
    validateOnMount: false,
  };
};

export default useEditUserFrom;
