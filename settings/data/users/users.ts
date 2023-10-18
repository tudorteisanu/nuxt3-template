import { UserInterface } from "~/types/user.interface";

const users: UserInterface[] = [
  ...new Array(50),
].map((_, id) => ({
  id,
  firstName: `firstname ${id + 1}`,
  lastName: `lastname ${id + 1}`,
  email: `email${id + 1}@example.com`,
}));

export default users;
