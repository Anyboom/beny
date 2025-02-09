<script setup lang="ts">
    import TheHeading from "@/components/blocks/TheHeading.vue";
    import SideMenu from "@/components/blocks/SideMenu.vue";
    import BaseWrapper from "@/components/ui/BaseWrapper.vue";
    import { Toast } from "primevue";
</script>
<template>
    <Toast>
        <template #message="{ message }">
            <div class="p-toast-message-text">
                <span class="p-toast-summary">{{ message.summary }}</span>
                <div class="p-toast-detail">{{ message.detail }}</div>
            </div>
        </template>
    </Toast>
    <div class="flex flex-col gap-6 w-full h-fit min-h-full bg-gray p-4">
        <TheHeading />
        <div class="flex gap-6 h-full">
            <base-wrapper class="h-fit">
                <SideMenu />
            </base-wrapper>
            <div
                class="flex w-full h-full gap-6 flex-row justify-between overflow-auto"
            >
                <slot></slot>
            </div>
        </div>
    </div>
</template>
