import { useMutation, useQuery } from "@tanstack/vue-query";
import { type SignUpDto } from "@/api/auth/dto/sign-up.dto";
import { profileApi, signInApi, signUpApi } from "@/api/auth/auth.api";
import { type SignInDto } from "@/api/auth/dto/sign-in.dto";
import { useAuthKeys } from "@/api/auth/use-auth.keys";

export function useSignUpApi() {
    return useMutation({
        mutationKey: [useAuthKeys.SIGN_UP],
        mutationFn: (data: SignUpDto) => signUpApi(data),
    });
}

export function useSignInApi() {
    return useMutation({
        mutationKey: [useAuthKeys.SIGN_IN],
        mutationFn: (data: SignInDto) => signInApi(data),
    });
}

export function useProfileApi() {
    return useQuery({
        queryKey: [useAuthKeys.PROFILE],
        queryFn: profileApi,
    });
}
