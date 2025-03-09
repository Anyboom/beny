<script setup lang="ts">
  import BaseWrapper from "@/components/ui/BaseWrapper.vue";
  import BetTableView from "@/components/blocks/admin/BetTableView.vue";
  import { onMounted } from "vue";
  import { useBetStore } from "@/stores/bet.store";

  const betStore = useBetStore();

  onMounted(() => {
    betStore.changePage(1);
  });
</script>

<template>
  <div class="flex w-full h-full gap-6 flex-row justify-between overflow-auto">
    <base-wrapper class="basis-full h-fit">
      <h2 class="text-2xl mb-4">Таблица ставок</h2>
      <div class="flex flex-col gap-4">
        <BetTableView table-style="height: 40rem"></BetTableView>
      </div>
    </base-wrapper>
  </div>
</template>

<style scoped></style>
