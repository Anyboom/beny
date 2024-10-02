<script setup lang="ts">
  import { ref } from "vue";
  import DataTable from "primevue/datatable";
  import Column from "primevue/column";
  import Paginator from "primevue/paginator";
  import ContentWrapper from "@/components/admin/ContentWrapper.vue";
  import SearchBet from "@/components/admin/blocks/SearchBet.vue";

  let products = ref(
    [...Array(10).keys()].map(() => {
      return {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "bamboo-watch.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5,
      };
    }),
  );
</script>

<template>
  <content-wrapper class="basis-full h-fit">
    <h2 class="text-2xl mb-4">Таблица ставок</h2>
    <div class="flex flex-col gap-4">
      <DataTable
        stripedRows
        :value="products"
        class="mb-4"
        tableStyle="min-width: 50rem"
      >
        <Column field="code" header="Дата созданния"></Column>
        <Column field="name" header="Количество"></Column>
        <Column field="category" header="Вид"></Column>
        <Column field="quantity" header="Название события"></Column>
        <Column field="price" header="Ставка"></Column>
        <Column field="inventoryStatus" header="Коэффициент"></Column>
        <Column field="description" header="Описание"></Column>
      </DataTable>
      <Paginator
        :rows="10"
        :totalRecords="120"
        template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="Показано {first} до {last} из {totalRecords}"
      />
    </div>
  </content-wrapper>
  <content-wrapper class="h-fit flex flex-col gap-4 basis-80">
    <SearchBet />
  </content-wrapper>
</template>

<style scoped></style>
