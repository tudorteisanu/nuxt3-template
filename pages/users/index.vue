<script setup>
import { useFetchUsers } from "~/composables";

useFetchUsers();
</script>

<template>
  <v-card flat="">
    <v-card-title>
      <v-btn color="primary" to="/users/add">
        Add user
      </v-btn>
    </v-card-title>
    <v-card-text>
      <v-card>
        <v-card-text>
          <UsersList />
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>
