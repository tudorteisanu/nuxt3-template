import * as yup from "yup";

const registerForm = {
  validationSchema: yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
    passwordConfirm: yup
      .string()
      .required()
      .min(6)
      .oneOf([yup.ref("password")]),
  }),
  initialValues: {
    firstName: "a",
    lastName: "a",
    email: "email@email.ru",
    password: "123566",
    passwordConfirm: "123566",
  },
};

export default registerForm;
