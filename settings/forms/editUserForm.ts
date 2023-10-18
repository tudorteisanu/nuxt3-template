import * as yup from "yup";

const editUserFrom = {
  validationSchema: yup.object({
    email: yup.string().required().email(),
    firstName: yup.string().required().min(2).max(128),
    lastName: yup.string().required().min(2).max(128),
  }),
};

export default editUserFrom;
