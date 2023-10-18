import * as yup from "yup";

const loginFrom = {
  validationSchema: yup.object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  }),
  initialValues: {
    email: "testuser@email.ru",
    password: "testuser@email.ru",
  },
};

export default loginFrom;
