<script setup lang="ts">
    import BaseWrapper from "@/components/ui/BaseWrapper.vue";
    import SignUpForm from "@/components/forms/auth/sign-up/SignUpForm.vue";
    import { type FormSubmitEvent } from "@primevue/forms";
    import { useSignUpApi } from "@/api/auth/use-auth.api";
    import { useToast } from "primevue";
    import { ToastService } from "@/services/toast.service";
    import { useRouter } from "vue-router";
    import { AxiosError, type AxiosResponse, HttpStatusCode } from "axios";
    import { type SignUpDto } from "@/api/auth/dto/sign-up.dto";
    import { RouteNamesEnum } from "@/router/types/router.types";

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

    async function onSuccess(response: AxiosResponse): Promise<void> {
        if (response.status !== HttpStatusCode.Created) {
            return;
        }

        await router.push({
            name: RouteNamesEnum.signIn,
        });

        toastService.showSuccess(
            `Пользователь зарегистрирован под почтой ${response.data.email}`,
        );
    }
</script>

<template>
    <h2 class="text-2xl mb-4">Регистрация</h2>
    <base-wrapper>
        <SignUpForm :submit="onSubmit" />
    </base-wrapper>
</template>

<style scoped></style>
