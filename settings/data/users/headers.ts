import { HeaderInterface } from "~/types/header.interface";
import { UserInterface } from "~/types/user.interface";

const headers: HeaderInterface<UserInterface>[] = [
  {
    title: "ID",
    key: "id",
  },
  {
    title: "First name",
    key: "firstName",
  },
  {
    title: "Last name",
    key: "lastName",
  },
  {
    title: "Email",
    key: "email",
  },
  {
    title: "",
    key: "actions",
    align: "end",
  },
];

export default headers;
