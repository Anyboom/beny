<script setup lang="ts">
  import InputText from "primevue/inputtext";
  import { ref } from "vue";
  import ContentWrapper from "@/components/admin/ContentWrapper.vue";
  import Button from "primevue/button";
  let text = ref();
</script>

<template>
  <div class="flex h-full items-center justify-center">
    <div class="w-1/5 h-fit">
      <h2 class="text-2xl mb-4">Авторизация</h2>
      <content-wrapper class="flex flex-col gap-2">
        <div>
          <label for="#">Почта</label>
          <InputText type="text" v-model="text"></InputText>
        </div>
        <div>
          <label for="#">Пароль</label>
          <InputText type="text" v-model="text"></InputText>
        </div>
        <div class="flex justify-end">
          <Button label="Войти"></Button>
        </div>
      </content-wrapper>
    </div>
  </div>
</template>

<style scoped></style>
