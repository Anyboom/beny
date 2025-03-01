<script setup lang="ts">
  import { ref } from "vue";
  import DataTable from "primevue/datatable";
  import Column from "primevue/column";
  import Paginator from "primevue/paginator";
  import Select from "primevue/select";
  import BaseWrapper from "@/components/ui/BaseWrapper.vue";

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

  const cities = ref([
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ]);
  const groupedCities = ref([
    {
      label: "Germany",
      code: "DE",
      items: [
        { label: "Berlin", value: "Berlin" },
        { label: "Frankfurt", value: "Frankfurt" },
        { label: "Hamburg", value: "Hamburg" },
        { label: "Munich", value: "Munich" },
      ],
    },
    {
      label: "USA",
      code: "US",
      items: [
        { label: "Chicago", value: "Chicago" },
        { label: "Los Angeles", value: "Los Angeles" },
        { label: "New York", value: "New York" },
        { label: "San Francisco", value: "San Francisco" },
      ],
    },
    {
      label: "Japan",
      code: "JP",
      items: [
        { label: "Kyoto", value: "Kyoto" },
        { label: "Osaka", value: "Osaka" },
        { label: "Tokyo", value: "Tokyo" },
        { label: "Yokohama", value: "Yokohama" },
      ],
    },
  ]);

  const selectedCity = ref({
    label: "Germany",
    code: "DE",
    items: [
      { label: "Berlin", value: "Berlin" },
      { label: "Frankfurt", value: "Frankfurt" },
      { label: "Hamburg", value: "Hamburg" },
      { label: "Munich", value: "Munich" },
    ],
  });
</script>

<template>
  <div class="flex w-full h-full gap-6 flex-row justify-between overflow-auto">
    <base-wrapper class="basis-full h-fit">
      <h2 class="text-2xl mb-4">Таблица ставок</h2>
      <div class="flex flex-col gap-4">
        <DataTable striped-rows :value="products" class="mb-4" table-style="min-width: 50rem">
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
          :total-records="120"
          template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          current-page-report-template="Показано {first} до {last} из {totalRecords}"
        />
      </div>
    </base-wrapper>
    <base-wrapper class="h-fit flex flex-col gap-4 basis-80">
      <div class="flex flex-col gap-2">
        <h3 class="text-xl mb-2">Поиск</h3>
        <div class="flex flex-col gap-1">
          <label>Год</label>
          <Select v-model="selectedCity" :options="cities" option-label="name" class="w-full" />
        </div>
        <div class="flex flex-col gap-1">
          <label>Месяц</label>
          <Select v-model="selectedCity" :options="cities" option-label="name" />
        </div>
        <div class="flex flex-col gap-1">
          <label>Команда</label>
          <Select
            v-model="selectedCity"
            filter
            auto-filter-focus
            :options="groupedCities"
            option-group-label="label"
            option-group-children="items"
            option-label="label"
          >
          </Select>
        </div>
        <div class="flex flex-col gap-1">
          <label>Турнир</label>
          <Select v-model="selectedCity" :options="cities" option-label="name" />
        </div>
        <div class="flex flex-col gap-1">
          <label>Статус</label>
          <Select v-model="selectedCity" :options="cities" option-label="name" />
        </div>
        <div class="flex justify-end">
          <Button severity="secondary" label="Сохранить"></Button>
        </div>
      </div>
    </base-wrapper>
  </div>
</template>

<style scoped></style>
