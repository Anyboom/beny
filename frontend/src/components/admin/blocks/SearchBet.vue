<script setup lang="ts">
  import Button from "primevue/button";
  import Select from "primevue/select";
  import { ref } from "vue";

  const cities = ref([
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ]);
  let selectedGroup = ref();
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
  const selectedCity = ref();
</script>

<template>
  <div class="flex flex-col gap-2">
    <h3 class="text-xl mb-2">Поиск</h3>
    <div class="flex flex-col gap-1">
      <label>Год</label>
      <Select
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        class="w-full"
      />
    </div>
    <div class="flex flex-col gap-1">
      <label>Месяц</label>
      <Select v-model="selectedCity" :options="cities" optionLabel="name" />
    </div>
    <div class="flex flex-col gap-1">
      <label>Команда</label>
      <Select
        filter
        autoFilterFocus
        v-model="selectedGroup"
        :options="groupedCities"
        optionGroupLabel="label"
        optionGroupChildren="items"
        optionLabel="label"
      >
      </Select>
    </div>
    <div class="flex flex-col gap-1">
      <label>Турнир</label>
      <Select v-model="selectedCity" :options="cities" optionLabel="name" />
    </div>
    <div class="flex flex-col gap-1">
      <label>Статус</label>
      <Select v-model="selectedCity" :options="cities" optionLabel="name" />
    </div>
    <div class="flex justify-end">
      <Button severity="secondary" label="Сохранить"></Button>
    </div>
  </div>
</template>

<style scoped></style>
