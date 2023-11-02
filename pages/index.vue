<script setup>
definePageMeta({
  middleware: ["auth"],
});
useHead({
  title: "Home",
});
</script>

<template>
  <v-card flat="" height="100%">
    <v-card-title>
      <h1>{{ $t('pages.home.title') }}</h1>
    </v-card-title>
    <v-card-text>
      <div>Home page loaded!</div>
    </v-card-text>
  </v-card>
</template>
