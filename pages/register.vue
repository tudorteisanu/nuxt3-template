<script setup>
import { useRegister } from "~/composables";

useHead({
  title: "Register",
});
definePageMeta({
  middleware: "auth",
  layout: "auth",
});

const { register, isSubmitting } = useRegister();
</script>

<template>
  <v-card
    style="max-width: 400px;"
    class="mx-auto mt-10"
  >
    <v-card-title class="text-center">
      Create User
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="register()">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              class="mt-0"
            >
              <base-text-field
                label="Username"
                name="username"
              />
            </v-col>
            <v-col
              cols="12"
              class="mt-0"
            >
              <base-text-field
                label="Email"
                name="email"
                type="email"
              />
            </v-col>
            <v-col
              cols="12"
              class="mt-0"
            >
              <base-text-field
                label="Password"
                name="password"
                type="password"
              />
            </v-col>
            <v-col
              cols="12"
              class="mt-0"
            >
              <base-text-field
                label="Password confirmation"
                name="passwordConfirm"
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
                :loading="isSubmitting"
              >
                Submit
              </v-btn>
              <div class="mt-4 text-right">
                <span>Have an account?</span>
                <nuxt-link to="/login">
                  Sign In
                </nuxt-link>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>
