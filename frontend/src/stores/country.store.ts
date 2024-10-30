import { defineStore } from "pinia";
import { ref } from "vue";
import { CountryEntity } from "@/entities/country.entity.ts";
import { getCountries } from "@/api/country.api.ts";

export const useCountryStore = defineStore("country", () => {
    const countries = ref<CountryEntity[]>([]);

    async function init(): Promise<void> {
        const data: CountryEntity[] = await getCountries();
        countries.value.push(...data);
    }

    async function getData(): Promise<CountryEntity[]> {
        if (countries.value.length == 0) {
            await init();
        }

        return countries.value;
    }

    return { getData };
});
