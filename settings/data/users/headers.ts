import type { HeaderInterface } from "~/types/header.interface";
import type { UserInterface } from "~/types/user.interface";

const headers: HeaderInterface<UserInterface>[] | any = [
  {
    title: "Username",
    key: "username",
  },
  {
    title: "Email",
    key: "email",
  },
  {
    title: "Updated on",
    key: "updatedOn",
  },
  {
    title: "Updated on",
    key: "createdOn",
  },
  {
    title: "",
    key: "actions",
    align: "end",
  },
];

export default headers;
