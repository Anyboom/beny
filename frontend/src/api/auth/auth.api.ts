import { type SignUpDto } from "@/api/auth/dto/sign-up.dto";
import axios from "axios";
import { type SignInDto } from "@/api/auth/dto/sign-in.dto";

export function signUpApi(data: SignUpDto) {
    return axios.post("http://api.beny.localhost/auth/sign-up", data);
}

export function signInApi(data: SignInDto) {
    return axios.post("http://api.beny.localhost/auth/sign-in", data);
}
