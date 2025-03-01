<script setup lang="ts">
    import BaseWrapper from "@/components/ui/BaseWrapper.vue";
    import SignInForm from "@/components/forms/auth/sign-in/SignInForm.vue";
    import type { FormSubmitEvent } from "@primevue/forms";
    import { useSignInApi } from "@/api/auth/use-auth.api";
    import { useToast } from "primevue";
    import { ToastService } from "@/services/toast.service";
    import { useRouter } from "vue-router";
    import type { SignUpDto } from "@/api/auth/dto/sign-up.dto.ts";
    import { type AxiosResponse, AxiosError, HttpStatusCode } from "axios";
    import { RouteNamesEnum } from "@/router/types/router.types";
    import { useI18n } from "vue-i18n";
    import { useUserStore } from "@/stores/user.store";

    const { t } = useI18n();
    const { mutate } = useSignInApi();

    const userStore = useUserStore();

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

        await userStore.signIn(response.data.access_token);

        await router.push({
            name: RouteNamesEnum.adminIndex,
        });

        toastService.showSuccess(`Вы успешно вошли`);
    }
</script>

<template>
    <h2 class="text-2xl mb-4">{{ t("sign-in-page.title") }}</h2>
    <base-wrapper class="flex flex-col gap-2">
        <SignInForm :submit="onSubmit" />
    </base-wrapper>
</template>

<style scoped></style>
