import { useMutation } from "@tanstack/vue-query";
import { type SignUpDto } from "@/api/auth/dto/sign-up.dto";
import { signInApi, signUpApi } from "@/api/auth/auth.api";
import { type SignInDto } from "@/api/auth/dto/sign-in.dto";

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
