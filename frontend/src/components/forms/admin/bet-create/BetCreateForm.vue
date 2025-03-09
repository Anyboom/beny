<script setup lang="ts">
  import Select from "primevue/select";
  import Button from "primevue/button";
  import InputNumber from "primevue/inputnumber";
  import { Form, type FormSubmitEvent } from "@primevue/forms";
  import DatePicker from "primevue/datepicker";
  import * as zodInstance from "@primevue/forms/resolvers/zod";
  import { betCreateFormSchema } from "@/components/forms/admin/bet-create/bet-create-form.schema";
  import { useTeamStore } from "@/stores/team.store";
  import { useSportStore } from "@/stores/sport.store";
  import { useForecastStore } from "@/stores/forecast.store";
  import { useCompetitionStore } from "@/stores/competition.store";
  import { storeToRefs } from "pinia";
  import { useTemplateRef } from "vue";

  const teamStore = useTeamStore();
  const sportStore = useSportStore();
  const forecastStore = useForecastStore();
  const competitionStore = useCompetitionStore();

  const { values: dataTeams } = storeToRefs(teamStore);
  const { values: dataSports } = storeToRefs(sportStore);
  const { values: dataForecasts } = storeToRefs(forecastStore);
  const { values: dataCompetitions } = storeToRefs(competitionStore);

  const { submit } = defineProps<{
    submit: (form: FormSubmitEvent) => void;
  }>();

  function onFormSubmit(form: FormSubmitEvent): void {
    if (form.valid) {
      submit(form);
    }
  }

  const form = useTemplateRef<{ reset: () => void }>("form");

  function reset(): void {
    form.value?.reset?.();
  }

  defineExpose({
    reset,
  });
</script>

<template>
  <Form
    ref="form"
    :initial-values="{
      startedAt: new Date(),
      coefficient: 1,
    }"
    class="flex flex-col gap-2"
    :resolver="zodInstance.zodResolver(betCreateFormSchema)"
    @submit="onFormSubmit"
  >
    <h3 class="text-xl mb-2">Форма создания</h3>
    <div class="flex flex-col gap-1">
      <label>
        <span class="block">Домашняя команда</span>
        <Select name="homeTeam" :options="dataTeams" option-label="name" class="w-full" />
      </label>
    </div>
    <div class="flex flex-col gap-1">
      <label>
        <span class="block">Гостевая команда</span>
        <Select name="guestTeam" :options="dataTeams" option-label="name" class="w-full" />
      </label>
    </div>
    <div class="flex flex-col gap-1">
      <label>
        <span class="block">Прогноз</span>
        <Select name="forecast" :options="dataForecasts" option-label="name" class="w-full" />
      </label>
    </div>
    <div class="flex flex-col gap-1">
      <label>
        <span class="block">Коэффициент</span>
        <InputNumber class="w-full" name="coefficient" :min-fraction-digits="0" :max-fraction-digits="3" />
      </label>
    </div>
    <div class="flex flex-col gap-1">
      <label>
        <span class="block">Дата и время начала</span>
        <DatePicker class="w-full" name="startedAt" show-time hour-format="24" selection-mode="single" />
      </label>
    </div>
    <div class="flex flex-col gap-1">
      <label>
        <span class="block">Чемпионат</span>
        <Select name="competition" :options="dataCompetitions" option-label="name" class="w-full" />
      </label>
    </div>
    <div class="flex flex-col gap-1">
      <label>
        <span class="block">Вид спорта</span>
        <Select name="sport" :options="dataSports" option-label="name" class="w-full" />
      </label>
    </div>
    <div class="flex justify-end">
      <Button severity="secondary" label="Сохранить" type="submit" />
    </div>
  </Form>
</template>

<style scoped></style>
