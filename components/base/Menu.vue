<script setup>
import { useAuth } from "~/composables";
const { logout } = useAuth();

const items = ref([
  {
    title: "Logout",
    handler: logout,
  },
]);
</script>

<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn
        variant="text"
        icon="mdi-dots-vertical"
        v-bind="props"
      />
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        :value="index"
      >
        <v-list-item-title @click="item.handler">
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
