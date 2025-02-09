<script setup lang="ts">
    import BaseWrapper from "@/components/ui/BaseWrapper.vue";
    import SignInForm from "@/components/forms/auth/sign-in/SignInForm.vue";
    import { FormSubmitEvent } from "@primevue/forms";
    import { useSignInApi } from "@/api/auth/use-auth.api.ts";
    import { useToast } from "primevue";
    import { ToastService } from "@/services/toast.service.ts";
    import { useRouter } from "vue-router";
    import { SignUpDto } from "@/api/auth/dto/sign-up.dto.ts";
    import { AxiosError, AxiosResponse, HttpStatusCode } from "axios";
    import { useAuthStore } from "@/stores/auth.store.ts";
    import { RouteNamesEnum } from "@/router/types/router.types.ts";

    const { mutate } = useSignInApi();

    const toastInstance = useToast();
    const toastService = new ToastService(toastInstance);
    const router = useRouter();

    const authStore = useAuthStore();

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

        authStore.setToken(response.data.access_token);

        await router.push({
            name: RouteNamesEnum.adminIndex,
        });

        toastService.showSuccess(`Вы успешно вошли`);
    }
</script>

<template>
    <h2 class="text-2xl mb-4">Авторизация</h2>
    <base-wrapper class="flex flex-col gap-2">
        <SignInForm :submit="onSubmit" />
    </base-wrapper>
</template>

<style scoped></style>
