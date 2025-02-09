import { useMutation } from "@tanstack/vue-query";
import { SignUpDto } from "@/api/auth/dto/sign-up.dto.ts";
import { signInApi, signUpApi } from "@/api/auth/auth.api.ts";
import { SignInDto } from "@/api/auth/dto/sign-in.dto.ts";

export function useSignUpApi() {
    return useMutation({
        mutationKey: ["auth/sign-up"],
        mutationFn: (data: SignUpDto) => signUpApi(data),
    });
}

export function useSignInApi() {
    return useMutation({
        mutationKey: ["auth/sign-in"],
        mutationFn: (data: SignInDto) => signInApi(data),
    });
}
