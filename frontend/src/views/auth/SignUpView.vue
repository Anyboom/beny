<script setup lang="ts">
    import InputText from "primevue/inputtext";
    import { ref } from "vue";
    import Button from "primevue/button";
    import BaseWrapper from "@/components/ui/BaseWrapper.vue";
    let text = ref();
</script>

<template>
    <div class="flex h-full items-center justify-center">
        <div class="w-1/5 h-fit">
            <h2 class="text-2xl mb-4">Регистрация</h2>
            <base-wrapper class="flex flex-col gap-2">
                <label>
                    <span class="block">Почта</span>
                    <InputText
                        type="text"
                        class="w-full"
                        v-model="text"
                    ></InputText>
                </label>
                <label>
                    <span class="block">Пароль</span>
                    <InputText
                        type="text"
                        class="w-full"
                        v-model="text"
                    ></InputText>
                </label>
                <label>
                    <span class="block">Повторите пароль</span>
                    <InputText
                        type="text"
                        class="w-full"
                        v-model="text"
                    ></InputText>
                </label>
                <div class="flex justify-end">
                    <Button label="Войти"></Button>
                </div>
            </base-wrapper>
        </div>
    </div>
</template>

<style scoped></style>
