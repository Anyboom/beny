import { z } from "zod";

export const signInFormSchema = z.object({
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
});
