<template>
  <div class="flex flex-col gap-6 w-full bg-gray h-screen p-4">
    <TheHeading />
    <div class="flex gap-6">
      <content-wrapper class="h-fit">
        <SideMenu />
      </content-wrapper>
      <div class="flex w-full gap-6 flex-row justify-between">
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
