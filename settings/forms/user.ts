export const createUserForm = {
  validationSchema: {
    email: {
      required: true,
      email: true,
    },
    bio: {
      min: 10,
    },
    username: {
      required: true,
      min: 2,
      max: 128,
    },
  },
  initialValues: {
    email: "root@2example.com",
    bio: "someSecurePassword",
    username: "root",
  },
};

export const editUserForm = {
  validationSchema: {
    email: {
      required: true,
      email: true,
    },
    username: {
      required: true,
      min: 2,
      max: 128,
    },
    bio: {
      min: 10,
      max: 1024,
    },
  },
};
