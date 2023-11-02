<script setup>
import { useCreateUser } from "~/composables/users/useCreateUser";

definePageMeta({
  middleware: ["auth"],
});
useHead({
  title: "Create User",
});
const { createUser, isSubmitting } = useCreateUser();
const submitting = toRef(isSubmitting);

</script>

<template>
  <v-card style="max-width: 400px;" class="mx-auto mt-10">
    <v-card-title class="text-center">
      Create User
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="createUser()">
        <v-container>
          <v-row>
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
                label="Username"
                name="username"
              />
            </v-col>
            <v-col
              cols="12"
              class="mt-0"
            >
              <base-text-field
                label="Bio"
                name="bio"
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
                :loading="submitting"
              >
                Submit
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>
