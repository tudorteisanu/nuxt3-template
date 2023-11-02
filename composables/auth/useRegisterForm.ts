import { useValidation } from "~/composables/base/validation";

const useRegisterForm = () => {
  const validation = useValidation();

  return {
    validationSchema: validation.object({
      username: validation.string().required(),
      email: validation.string().required().email(),
      password: validation.string().required().min(6),
      passwordConfirm: validation
        .string()
        .required()
        .min(6)
        .oneOf([validation.ref("password")]),
    }),
    initialValues: {
      username: "testuser",
      email: "user@example.com",
      password: "pR19osep?W4o*a0*gafe",
      passwordConfirm: "pR19osep?W4o*a0*gafe",
    },
  };
};

export default useRegisterForm;
