import { defineStore } from "pinia";
import { SportEntity } from "@/entities/sport.entity.ts";
import { getSports } from "@/api/sport.api.ts";
import { ref } from "vue";

export const useSportStore = defineStore("sport", () => {
    const sports = ref<SportEntity[]>([]);

    async function init(): Promise<void> {
        const data: SportEntity[] = await getSports();
        sports.value.push(...data);
    }

    async function getData(): Promise<SportEntity[]> {
        if (sports.value.length == 0) {
            await init();
        }

        return sports.value;
    }

    return { getData };
});
