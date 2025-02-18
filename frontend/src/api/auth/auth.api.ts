import { type SignUpDto } from "@/api/auth/dto/sign-up.dto";
import { type SignInDto } from "@/api/auth/dto/sign-in.dto";
import httpClient from "@/api/http-client";

export function signUpApi(data: SignUpDto) {
    return httpClient.post("http://api.beny.localhost/auth/sign-up", data);
}

export function signInApi(data: SignInDto) {
    return httpClient.post("http://api.beny.localhost/auth/sign-in", data);
}

export function profileApi() {
    return httpClient.get("http://api.beny.localhost/auth/profile");
}
