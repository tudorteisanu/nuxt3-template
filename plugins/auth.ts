import { storeToRefs } from "pinia";
import { useAuth } from "~/composables/base/auth";

export default defineNuxtPlugin(async () => {
  const cookieToken = useCookie("token", {
    watch: true,
    httpOnly: true,
  });
  const { currentUser, token } = storeToRefs(useAuthStore());
  const { check } = useAuth();

  watch(cookieToken, (newToken) => {
    token.value = newToken;
  });

  // Skip if already initialized on server
  if (currentUser.value) {
    return;
  }

  if (cookieToken.value) {
    await check(cookieToken.value);
  }
});
