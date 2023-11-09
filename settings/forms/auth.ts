export const loginForm = {
  validationSchema: {
    password: {
      required: true,
    },
    username: {
      required: true,
    },
  },
  initialValues: {
    password: "someSecurePassword",
    username: "root",
  },
};

export const registerForm = {
  validationSchema: {
    email: {
      required: true,
      email: true,
    },
    password: {
      required: true,
      min: 8,
    },
    passwordConfirm: {
      required: true,
      min: 8,
    },
    username: {
      required: true,
      min: 2,
      max: 128,
    },
  },
  initialValues: {
    email: "root@example.com",
    password: "someSecurePassword",
    passwordConfirm: "someSecurePassword",
    username: "root",
  },
};
