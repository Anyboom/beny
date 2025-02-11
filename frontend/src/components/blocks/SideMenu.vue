<script setup lang="ts">
    import Menu from "primevue/menu";
    import { ref } from "vue";
    import { RouteNamesEnum } from "@/router/types/router.types";

    const items = ref([
        {
            label: "Таблица ставок",
            icon: "pi pi-table",
            route: {
                name: RouteNamesEnum.adminIndex,
            },
        },
        {
            label: "Действия",
            items: [
                {
                    label: "Создать ставку",
                    icon: "pi pi-plus",
                },
            ],
        },
    ]);
</script>

<template>
    <div class="sticky top-2">
        <Menu :model="items">
            <template #item="{ item, props }">
                <router-link
                    v-if="item.route"
                    v-slot="{ href, navigate }"
                    :to="item.route"
                    custom
                >
                    <a
                        v-ripple
                        :href="href"
                        v-bind="props.action"
                        @click="navigate"
                    >
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </router-link>
                <a
                    v-else
                    v-ripple
                    :href="item.url"
                    :target="item.target"
                    v-bind="props.action"
                >
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </template>
        </Menu>
    </div>
</template>

<style scoped></style>
