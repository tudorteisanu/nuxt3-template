import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware((to) => {
  const { isLoggedIn } = storeToRefs(useAuthStore());

  if (!isLoggedIn.value && to.fullPath === "/register") {
    return;
  }

  if (isLoggedIn.value && to.fullPath === "/login") {
    return navigateTo("/");
  }

  if (!isLoggedIn.value && to.fullPath !== "/login") {
    abortNavigation();
    return navigateTo("/login");
  }
});
