export default defineEventHandler((event) => {
  const id = Number(getRouterParam(event, "id"));

  return {
    id,
    firstName: "Valera",
    lastName: "Feodorovici",
    email: "ValeraFeodorovici@mail.ru",
  };
});
