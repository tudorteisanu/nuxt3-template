import { storeToRefs } from "pinia";
import { useAuth } from "~/composables";

export default defineNuxtPlugin(async () => {
  const { currentUser } = storeToRefs(useAuthStore());
  const { check } = useAuth();

  // Skip if already initialized on server
  if (currentUser.value) {
    return;
  }

  await check();
});
