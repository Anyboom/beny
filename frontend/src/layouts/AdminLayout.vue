<template>
    <div class="flex flex-col gap-6 w-full h-fit min-h-full bg-gray p-4">
        <TheHeading />
        <div class="flex gap-6 h-full">
            <content-wrapper class="h-fit">
                <SideMenu />
            </content-wrapper>
            <div
                class="flex w-full h-full gap-6 flex-row justify-between overflow-auto"
            >
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import TheHeading from "@/components/admin/blocks/TheHeading.vue";
    import ContentWrapper from "@/components/admin/ContentWrapper.vue";
    import SideMenu from "@/components/admin/blocks/SideMenu.vue";
</script>
