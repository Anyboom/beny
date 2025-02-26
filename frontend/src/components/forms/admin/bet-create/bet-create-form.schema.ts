import { z } from "zod";

export const betCreateFormSchema = z.object({
    homeTeam: z.object({
        id: z.string(),
    }),
    guestTeam: z.object({
        id: z.string(),
    }),
    forecast: z.object({
        id: z.string(),
    }),
    coefficient: z.number(),
    startedAt: z.date(),
    competition: z.object({
        id: z.string(),
    }),
    sport: z.object({
        id: z.string(),
    }),
});
