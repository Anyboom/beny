<script setup lang="ts">
  import Menu from "primevue/menu";
  import { ref } from "vue";

  const items = ref([
    {
      label: "Ставки",
      icon: "pi pi-file",
      items: [
        {
          label: "Просмотр",
          icon: "pi pi-plus",
        },
        {
          label: "Ординар",
          icon: "pi pi-folder-open",
        },
        {
          label: "Экспресс",
          icon: "pi pi-folder-open",
        },
      ],
    },
    {
      label: "Edit",
      icon: "pi pi-file-edit",
      items: [
        {
          label: "Copy",
          icon: "pi pi-copy",
        },
        {
          label: "Delete",
          icon: "pi pi-times",
        },
      ],
    },
    {
      label: "Search",
      icon: "pi pi-search",
    },
    {
      separator: true,
    },
    {
      label: "Share",
      icon: "pi pi-share-alt",
      items: [
        {
          label: "Slack",
          icon: "pi pi-slack",
        },
        {
          label: "Whatsapp",
          icon: "pi pi-whatsapp",
        },
      ],
    },
  ]);
</script>

<template>
  <div class="sticky top-2">
    <Menu :model="items" />
  </div>
</template>

<style scoped></style>
