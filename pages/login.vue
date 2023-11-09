<script setup>
import { useLogin } from "~/composables";

useHead({
  title: "Login",
});
definePageMeta({
  layout: "auth",
  middleware: "auth",
});
const { loginUser } = useLogin();
</script>

<template>
  <v-card style="max-width: 400px;" class="mx-auto mt-10">
    <v-card-title class="text-center">
      Create User
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="loginUser()">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              class="mt-0"
            >
              <BaseTextField
                label="Username"
                name="username"
              />
            </v-col>
            <v-col
              cols="12"
              class="mt-0"
            >
              <BaseTextField
                label="Password"
                name="password"
                type="password"
              />
            </v-col>
            <v-col
              cols="12"
              class="mt-0"
            >
              <v-btn
                type="submit"
                style="width: 100%"
                color="primary"
              >
                Submit
              </v-btn>
              <div class="mt-4 text-right">
                <span>Need an account?</span>
                <nuxt-link to="/register">
                  Sign Up
                </nuxt-link>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>
