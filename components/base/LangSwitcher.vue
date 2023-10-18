<script setup>
const { locales, locale, setLocale } = useI18n();

</script>

<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
      >
        <span class="font-bold">
          {{ locale.toUpperCase() }}
        </span>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="item in locales"
        :key="item.code"
        :value="item.code"
        @click="setLocale(item.code)"
      >
        <v-list-item-title>{{ item.code.toUpperCase() }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
