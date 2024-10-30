import { EventStatus } from "@/enums/event-status.enum.ts";
import { UserEntity } from "@/entities/user.entity.ts";

export type BetEntity = {
    id: number;
    status: EventStatus;
    user: UserEntity;
};
