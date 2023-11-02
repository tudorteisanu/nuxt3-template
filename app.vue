<template>
  <NuxtLayout>
    <div v-show="loading" class="loading-container">
      <div class="loading">
        <div class="loading-spinner" />
        <div>
          Loading...
        </div>
      </div>
    </div>
    <NuxtPage />
    <ConfirmDialog />
  </NuxtLayout>
</template>
<script setup>
const nuxtApp = useNuxtApp();
const loading = ref(false);

addRouteMiddleware("global-loader", () => {
  loading.value = true;
}, {
  global: true,
});

nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>

<style>
.loading-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0, 0.3);
    z-index: 111111111;
    display: flex;
    align-items: center;
    justify-content: center;
}

.loading-spinner {
    height: 50px;
    width: 50px;
    border: 2px solid red;
    border-bottom: none;
    border-top: none;
    animation: 1s infinite linear spin;
    border-radius: 100%;
    padding: 20px;
}
@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
</style>
