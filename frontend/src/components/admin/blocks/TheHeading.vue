<script setup lang="ts">
  import Menu from "primevue/menu";
  import Popover from "primevue/popover";
  import Menubar from "primevue/menubar";
  import { ref } from "vue";

  const op = ref();

  const toggle = (event: any) => {
    op.value.toggle(event);
  };

  const items = ref([
    {
      label: "Редактировать",
    },
    {
      label: "Просмотр",
    },
    {
      label: "Выйти",
    },
  ]);
</script>

<template>
  <Menubar>
    <template #start>
      <h1 class="text-xl">Logo</h1>
    </template>
    <template #end>
      <div class="flex items-center gap-2">
        <span class="cursor-pointer hover:underline" @click="toggle">
          danilka.volkov.02@mail.ru
        </span>
        <Popover ref="op">
          <div class="w-[15rem]">
            <Menu :model="items" />
          </div>
        </Popover>
      </div>
    </template>
  </Menubar>
</template>

<style scoped></style>
