<script setup lang="ts">
    import BaseWrapper from "@/components/ui/BaseWrapper.vue";
    import SignUpForm from "@/components/forms/auth/sign-up/SignUpForm.vue";
    import { FormSubmitEvent } from "@primevue/forms";
    import { useSignUpApi } from "@/api/auth/use-auth.api.ts";
    import { useToast } from "primevue";
    import { ToastService } from "@/services/toast.service.ts";
    import { useRouter } from "vue-router";
    import { AxiosError, AxiosResponse, HttpStatusCode } from "axios";
    import { SignUpDto } from "@/api/auth/dto/sign-up.dto.ts";
    import { RouteNamesEnum } from "@/router/types/router.types.ts";

    const { mutate } = useSignUpApi();

    const toastInstance = useToast();
    const toastService = new ToastService(toastInstance);
    const router = useRouter();

    function onSubmit(form: FormSubmitEvent): void {
        const data: SignUpDto = {
            email: form.values.email,
            password: form.values.password,
        };

        mutate(data, {
            onError,
            onSuccess,
        });
    }

    function onError(error: Error): void {
        if (error instanceof AxiosError == false) {
            return;
        }

        if (error.response) {
            toastService.showError(error.response.data.message);
        } else {
            toastService.showError("Произошла непредвиденная ошибка");
        }
    }

    function onSuccess(response: AxiosResponse): void {
        if (response.status !== HttpStatusCode.Created) {
            return;
        }

        toastService.showSuccess(
            `Пользователь зарегистрирован под почтой ${response.data.email}`,
        );

        router.push({
            name: RouteNamesEnum.signIn,
        });
    }
</script>

<template>
    <h2 class="text-2xl mb-4">Регистрация</h2>
    <base-wrapper>
        <SignUpForm :submit="onSubmit" />
    </base-wrapper>
</template>

<style scoped></style>
