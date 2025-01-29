<script setup lang="ts">
    import { useRoute } from "vue-router";
    import { VueElement } from "vue";

    const route = useRoute();
</script>

<template>
    <component :is="route.meta.layoutComponent as VueElement">
        <slot />
    </component>
</template>

<style scoped></style>
