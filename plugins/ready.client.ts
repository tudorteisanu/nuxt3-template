export default defineNuxtPlugin(() => {
  const { finish } = useLoadingStore();
  onNuxtReady(() => {
    finish();
  });
});
