import { z } from "zod";

export const signUpFormSchema = z
    .object({
        email: z
            .string({ message: "Введите почту" })
            .min(1, {
                message: "Введите почту",
            })
            .email({ message: "Заполните корректно почту" }),
        password: z
            .string({
                message: "Введите пароль",
            })
            .min(1, {
                message: "Введите пароль",
            }),
        confirm: z.string({
            message: "Повторите пароль",
        }),
    })
    .refine((data) => data.password === data.confirm, {
        message: "Пароли не совпадают",
        path: ["confirm"],
    });
