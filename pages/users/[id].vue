<script setup>
import { useUpdateUser } from "~/composables";

const { updateUser, isSubmitting } = useUpdateUser();
</script>

<template>
  <v-card style="max-width: 400px;" class="mx-auto mt-10">
    <v-card-title class="text-center">
      {{ $t('pages.editUser.title') }}
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
                :label="$t('pages.editUser.form.email')"
                name="email"
                type="email"
              />
            </v-col>
            <v-col
              cols="12"
              class="mt-0"
            >
              <base-text-field
                :label="$t('pages.editUser.form.username')"
                name="username"
              />
            </v-col>
            <v-col
              cols="12"
              class="mt-0"
            >
              <base-text-field
                :label="$t('pages.editUser.form.bio')"
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
                :loading="isSubmitting"
              >
                {{ $t('pages.editUser.form.submit') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>
