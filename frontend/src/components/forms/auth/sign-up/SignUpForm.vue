<script setup lang="ts">
  import * as zodInstance from "@primevue/forms/resolvers/zod";
  import Button from "primevue/button";
  import { Form, type FormSubmitEvent } from "@primevue/forms";
  import InputText from "primevue/inputtext";
  import Password from "primevue/password";
  import { signUpFormSchema } from "@/components/forms/auth/sign-up/sign-up-form.schema";
  import { Message } from "primevue";

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
      <InputText type="text" class="w-full" name="email"></InputText>
      <Message v-if="$form.email?.invalid" severity="error" size="small" variant="outlined" class="mt-2">
        {{ $form.email.error.message }}
      </Message>
    </label>
    <label>
      <span class="block">Пароль</span>
      <Password type="text" name="password" :feedback="false"></Password>
      <Message v-if="$form.password?.invalid" severity="error" size="small" variant="outlined" class="mt-2">
        {{ $form.password.error.message }}
      </Message>
    </label>
    <label>
      <span class="block">Повторите пароль</span>
      <Password type="text" name="confirm" :feedback="false"></Password>
      <Message v-if="$form.confirm?.invalid" severity="error" size="small" variant="outlined" class="mt-2">
        {{ $form.confirm.error.message }}
      </Message>
    </label>
    <div class="flex justify-end">
      <Button type="submit" severity="primary" label="Войти"></Button>
    </div>
  </Form>
</template>

<style scoped></style>
