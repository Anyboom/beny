<script setup lang="ts">
    import ContentWrapper from "@/components/admin/ContentWrapper.vue";
    import FormCreateBet from "@/components/admin/forms/FormCreateBet.vue";
    import Button from "primevue/button";
    import Column from "primevue/column";
    import DataTable from "primevue/datatable";
    import { ref } from "vue";

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
    <content-wrapper class="h-fit basis-80">
        <FormCreateBet v-once />
    </content-wrapper>
    <content-wrapper class="overflow-auto basis-full">
        <div class="flex flex-col gap-4">
            <DataTable stripedRows :value="products">
                <Column field="code" header="Дата созданния"></Column>
                <Column field="name" header="Количество"></Column>
                <Column field="category" header="Вид"></Column>
                <Column field="quantity" header="Название события"></Column>
                <Column field="price" header="Ставка"></Column>
                <Column field="inventoryStatus" header="Коэффициент"></Column>
                <Column field="description" header="Описание"></Column>
            </DataTable>
            <div class="flex justify-end">
                <Button label="Сохранить"></Button>
            </div>
        </div>
    </content-wrapper>
</template>

<style scoped></style>
