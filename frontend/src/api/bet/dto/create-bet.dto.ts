import type { EventEntity } from "@/entities/event.entity";

export type CreateBetDto = {
  userId: string;
  events: Omit<EventEntity, "id" | "betId">[];
};
