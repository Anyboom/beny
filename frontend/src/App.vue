<script setup lang="ts">
  import AppLayout from "@/layouts/AppLayout.vue";
  import { VueQueryDevtools } from "@tanstack/vue-query-devtools";
</script>

<template>
  <AppLayout>
    <VueQueryDevtools />
    <RouterView />
  </AppLayout>
</template>
