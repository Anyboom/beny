<script setup lang="ts">
    import Select from "primevue/select";
    import InputNumber from "primevue/inputnumber";
    import Button from "primevue/button";
    import DatePicker from "primevue/datepicker";
    import { ref } from "vue";

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
</script>

<template>
    <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-1">
            <label>Домашняя команда</label>
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
            <label>Гостевая команда</label>
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
            <label>Прогноз</label>
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
            <label>Коэффициент</label>
            <InputNumber :maxFractionDigits="2" :max="200"></InputNumber>
        </div>
        <div class="flex flex-col gap-1">
            <label>Дата и время</label>
            <DatePicker id="datepicker-24h" showTime hourFormat="24" fluid />
        </div>
        <div class="flex flex-col gap-1">
            <label>Чемпионат и спорт</label>
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
        <div class="flex justify-end">
            <Button label="Добавить"></Button>
        </div>
    </div>
</template>

<style scoped></style>
