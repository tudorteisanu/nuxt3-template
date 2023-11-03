import { defineStore } from "pinia";

export const useLoadingStore = defineStore({
  id: "loading",
  state: () => ({
    show: true as boolean,
  }),
  actions: {
    start() {
      this.show = true;
    },
    finish() {
      this.show = false;
    },
  },
});
