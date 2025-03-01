<script setup lang="ts">
  import { Toast } from "primevue";
</script>

<template>
  <Toast>
    <template #message="{ message }">
      <div class="p-toast-message-text">
        <span class="p-toast-summary">{{ message.summary }}</span>
        <div class="p-toast-detail">{{ message.detail }}</div>
      </div>
    </template>
  </Toast>
  <div class="bg-gray h-screen flex items-center justify-center">
    <div class="max-w-96 w-full h-fit px-2">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
