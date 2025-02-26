import type { EventEntity } from "@/entities/event.entity";

export type BetEntity = {
    id: string;
    userId: string;
    events: EventEntity[];
};
