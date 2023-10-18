<script setup>
import { storeToRefs } from "pinia";

definePageMeta({
  middleware: ["auth"],
});
useHead({
  title: "Home",
});
const user = storeToRefs(useAuthStore());
</script>

<template>
  <div>
    <div>
      <h1>{{ $t('pages.home.title') }}</h1>
      <pre>{{ user }}</pre>
    </div>
  </div>
</template>
