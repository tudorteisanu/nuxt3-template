import { useValidation } from "~/composables/base/validation";

const useLoginFrom = () => {
  const validation = useValidation();

  return {
    validationSchema: validation.object({
      username: validation.string().required(),
      password: validation.string().required(),
    }),
    initialValues: {
      username: "testuser",
      password: "pR19osep?W4o*a0*gafe",
    },
  };
};

export default useLoginFrom;
