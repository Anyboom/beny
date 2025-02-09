<script setup lang="ts">
    import * as zodInstance from "@primevue/forms/resolvers/zod";
    import Button from "primevue/button";
    import { Form, FormSubmitEvent } from "@primevue/forms";
    import InputText from "primevue/inputtext";
    import Password from "primevue/password";
    import { signUpFormSchema } from "@/components/forms/auth/sign-up/sign-up-form.schema.ts";

    const { submit } = defineProps<{
        submit: (form: FormSubmitEvent) => void;
    }>();

    function onFormSubmit(form: FormSubmitEvent): void {
        if (form.valid) {
            submit(form);
        }
    }
</script>

<template>
    <Form
        v-slot="$form"
        :resolver="zodInstance.zodResolver(signUpFormSchema)"
        class="flex flex-col gap-2"
        @submit="onFormSubmit"
    >
        <label>
            <span class="block">Почта</span>
            <InputText
                v-tooltip="{
                    value: $form.email?.invalid
                        ? $form.email.error?.message
                        : String(),
                }"
                type="text"
                class="w-full"
                name="email"
            ></InputText>
        </label>
        <label>
            <span class="block">Пароль</span>
            <Password
                v-tooltip="{
                    value: $form.password?.invalid
                        ? $form.password.error?.message
                        : String(),
                }"
                type="text"
                name="password"
                :feedback="false"
            ></Password>
        </label>
        <label>
            <span class="block">Повторите пароль</span>
            <Password
                v-tooltip="{
                    value: $form.confirm?.invalid
                        ? $form.confirm.error?.message
                        : String(),
                }"
                type="text"
                name="confirm"
                :feedback="false"
            ></Password>
        </label>
        <div class="flex justify-end">
            <Button type="submit" severity="primary" label="Войти"></Button>
        </div>
    </Form>
</template>

<style scoped></style>
