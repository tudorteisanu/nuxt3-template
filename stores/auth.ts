import { defineStore } from "pinia";
import { useApiFetch } from "~/composables";
import type { CreateUserInterface, TokensInterface, UserInterface } from "~/types";
import type { LoginInterface } from "~/types/login.interface";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    currentUser: null as UserInterface | null,
    isLoggedIn: false as boolean,
    accessToken: null as string | null | undefined,
    refreshToken: null as string | null | undefined,
  }),
  getters: {

  },
  actions: {
    async login(payload: LoginInterface) {
      const response = await useApiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      const { user, tokens } = response;
      this.currentUser = user;
      this.isLoggedIn = true;
      this.setTokens(tokens);
      return response;
    },
    async register(payload: CreateUserInterface) {
      try {
        const { user, tokens } = await useApiFetch("/auth/register", {
          method: "POST",
          body: JSON.stringify(payload),
        });

        this.currentUser = user;
        this.isLoggedIn = true;
        this.setTokens(tokens);
      }
      catch (e) {
        console.log(e);
      }
    },
    setAccessToken(token: string | null | undefined) {
      this.accessToken = token;
    },
    setRefreshToken(token: string | null | undefined) {
      this.refreshToken = token;
    },
    setTokens({ access, refresh }: TokensInterface) {
      this.setAccessToken(access);
      this.setRefreshToken(refresh);
    },
    async logout() {
      try {
        await useApiFetch("/auth/logout");
        this.reset();
      }
      catch (e) {
        console.log(e);
      }
    },
    reset() {
      this.setTokens({ access: null, refresh: null });
      this.currentUser = null;
      this.isLoggedIn = false;
    },
    async check(token: string) {
      try {
        return await useApiFetch("/auth/check", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
      }
      catch (e) {
        console.log(e, "check error");
      }
    },
    async refresh() {
      try {
        const { accessToken } = await useApiFetch("/auth/check", {
          headers: {
            authorization: `Bearer ${this.refreshToken}`,
          },
        });
        this.setAccessToken(accessToken);
      }
      catch (e) {
        this.reset();
        console.log(e);
      }
    },
  },
});
