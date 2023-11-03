<script setup lang="ts">
import { sideMenu } from "~/settings/menu";
const localPath = useLocalePath();
const drawer = ref(true);
const toggle = () => {
  drawer.value = !drawer.value;
};

const { currentUser } = storeToRefs(useAuthStore());
const userName = computed(() => {
  if (currentUser.value) {
    return currentUser.value?.username;
  }

  return null;
});
</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        :rail="drawer"
        permanent
      >
        <v-list>
          <v-list-item
            v-if="userName"
            :title="userName"
            :subtitle="currentUser.email"
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          />
          <v-list-item
            v-else
            style="height: 50px;"
            title=""
            subtitle=""
          />
        </v-list>
        <v-divider />

        <v-list
          data-test="menu-items"
          class="pt-0"
        >
          <v-list-item
            v-for="item in sideMenu"
            :key="item.value"
            :prepend-icon="item.icon"
            :to="localPath(item.to)"
            :title="$t(item.title)"
          />
        </v-list>
      </v-navigation-drawer>

      <v-main style="min-height: 100vh">
        <v-app-bar
          color="primary"
          prominent
        >
          <v-app-bar-nav-icon
            variant="text"
            data-test="menu-toggle"
            @click.stop="toggle()"
          />
          <v-toolbar-title>
            My files
          </v-toolbar-title>
          <v-spacer />
          <v-btn
            variant="text"
            icon="mdi-magnify"
          />
          <LangSwitcher />
          <Menu />
        </v-app-bar>
        <v-card-text>
          <slot />
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
</template>
