<script setup>
import { useUpdateUser } from "~/composables/users/useUpdateUser";

definePageMeta({
  middleware: ["auth"],
});
useHead({
  title: "Users",
});
const { fetchUser, updateUser, isSubmitting } = useUpdateUser();
const route = useRoute();
onBeforeMount(async () => {
  await fetchUser(Number(route.params.id));
});
</script>

<template>
  <v-card style="max-width: 400px;" class="mx-auto mt-10">
    <v-card-title class="text-center">
      Create User
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="updateUser()">
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
                label="First name"
                name="firstName"
              />
            </v-col>
            <v-col
              cols="12"
              class="mt-0"
            >
              <base-text-field
                label="Last name"
                name="lastName"
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
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>
