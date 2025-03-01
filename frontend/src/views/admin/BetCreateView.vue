<script setup lang="ts">
  import Column from "primevue/column";
  import DataTable from "primevue/datatable";
  import BaseWrapper from "@/components/ui/BaseWrapper.vue";
  import { reactive, useTemplateRef } from "vue";
  import BetCreateForm from "@/components/forms/admin/bet-create/BetCreateForm.vue";
  import Button from "primevue/button";
  import type { EventEntity } from "@/entities/event.entity";
  import type { FormSubmitEvent } from "@primevue/forms";
  import { StatusEventEnum } from "@/enums/status-event.enum";
  import { useTeamStore } from "@/stores/team.store";
  import { useSportStore } from "@/stores/sport.store";
  import { useForecastStore } from "@/stores/forecast.store";
  import { useCompetitionStore } from "@/stores/competition.store";
  import { storeToRefs } from "pinia";
  import { findBy } from "@/utils/find-by.utils";

  const events = reactive<Partial<EventEntity>[]>([]);

  const teamStore = useTeamStore();
  const sportStore = useSportStore();
  const forecastStore = useForecastStore();
  const competitionStore = useCompetitionStore();

  const { values: dataTeams } = storeToRefs(teamStore);
  const { values: dataSports } = storeToRefs(sportStore);
  const { values: dataForecasts } = storeToRefs(forecastStore);
  const { values: dataCompetitions } = storeToRefs(competitionStore);

  const form = useTemplateRef<InstanceType<typeof BetCreateForm>>("form");

  function onSubmitCreateBet(formSubmitEvent: FormSubmitEvent) {
    events.push({
      coefficient: formSubmitEvent.values.coefficient,
      status: StatusEventEnum.NOT_CALCULATED,
      forecastId: formSubmitEvent.values.forecast.id,
      guestTeamId: formSubmitEvent.values.guestTeam.id,
      homeTeamId: formSubmitEvent.values.homeTeam.id,
      sportId: formSubmitEvent.values.sport.id,
      competitionId: formSubmitEvent.values.competition.id,
    });

    form.value?.reset();
  }
</script>

<template>
  <div class="flex flex-col w-full h-full gap-6 justify-between overflow-auto">
    <div class="flex gap-6">
      <base-wrapper class="flex flex-col gap-4 basis-80">
        <BetCreateForm ref="form" :submit="onSubmitCreateBet" />
      </base-wrapper>
      <base-wrapper class="basis-full">
        <h2 class="text-2xl mb-4">Таблица ставок</h2>
        <div class="flex flex-col gap-4" style="height: 40rem">
          <DataTable striped-rows :value="events" class="mb-4" table-class="w-full" scrollable scroll-height="40rem">
            <template #empty>Таблица пустая</template>
            <Column field="coefficient" header="Коэффициент"></Column>
            <Column header="Чемпионат">
              <template #body="{ data }">
                {{ findBy(dataCompetitions, "id", data.competitionId)?.name }}
              </template>
            </Column>
            <Column header="Гостевая команда">
              <template #body="{ data }">
                {{ findBy(dataTeams, "id", data.guestTeamId)?.name }}
              </template>
            </Column>
            <Column header="Домашняя команда">
              <template #body="{ data }">
                {{ findBy(dataTeams, "id", data.homeTeamId)?.name }}
              </template>
            </Column>
            <Column header="Вид спорта">
              <template #body="{ data }">
                {{ findBy(dataSports, "id", data.sportId)?.name }}
              </template>
            </Column>
            <Column header="Ставка">
              <template #body="{ data }">
                {{ findBy(dataForecasts, "id", data.forecastId)?.name }}
              </template>
            </Column>
          </DataTable>
        </div>
      </base-wrapper>
    </div>
    <base-wrapper class="flex justify-end">
      <Button severity="secondary" label="Сохранить" :disabled="events.length <= 0"></Button>
    </base-wrapper>
  </div>
</template>

<style scoped></style>
