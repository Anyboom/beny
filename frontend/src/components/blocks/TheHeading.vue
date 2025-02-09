<script setup lang="ts">
    import Menu from "primevue/menu";
    import Popover from "primevue/popover";
    import Menubar from "primevue/menubar";
    import { ref } from "vue";
    import { MenuItem } from "primevue/menuitem";
    import { useAuthStore } from "@/stores/auth.store.ts";
    import { useRouter } from "vue-router";
    import { RouteNamesEnum } from "@/router/types/router.types.ts";

    const op = ref();

    const toggle = (event: any) => {
        op.value.toggle(event);
    };

    const authStore = useAuthStore();
    const router = useRouter();

    const items = ref<MenuItem[]>([
        {
            label: "Редактировать",
        },
        {
            label: "Просмотр",
        },
        {
            label: "Выйти",
            command: () => {
                authStore.removeToken();
                router.push({
                    name: RouteNamesEnum.signIn,
                });
            },
        },
    ]);
</script>

<template>
    <Menubar>
        <template #start>
            <div class="flex items-center gap-2">
                <span class="cursor-pointer hover:underline" @click="toggle">
                    Профиль
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
