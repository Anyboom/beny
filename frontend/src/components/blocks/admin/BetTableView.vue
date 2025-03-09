<script setup lang="ts">
  import { findBy } from "@/utils/find-by.utils";
  import { useTeamStore } from "@/stores/team.store";
  import { useSportStore } from "@/stores/sport.store";
  import { useForecastStore } from "@/stores/forecast.store";
  import { useCompetitionStore } from "@/stores/competition.store";
  import { storeToRefs } from "pinia";
  import { useBetStore } from "@/stores/bet.store";
  import { ref } from "vue";
  import { convertStatusToString } from "@/utils/convertStatusToString.utils";
  import { Badge, Column, DataTable, type DataTableExpandedRows, type DataTablePageEvent } from "primevue";
  import { convertStatusToSeverity } from "@/utils/convertStatusToSeverity";

  const teamStore = useTeamStore();
  const sportStore = useSportStore();
  const forecastStore = useForecastStore();
  const competitionStore = useCompetitionStore();

  const betStore = useBetStore();

  const { values: dataTeams } = storeToRefs(teamStore);
  const { values: dataSports } = storeToRefs(sportStore);
  const { values: dataForecasts } = storeToRefs(forecastStore);
  const { values: dataCompetitions } = storeToRefs(competitionStore);

  const { paginatedValues: dataBets } = storeToRefs(betStore);

  const expandedRows = ref<DataTableExpandedRows>({});

  function changePage(event: DataTablePageEvent) {
    betStore.changePage(event.page + 1);
  }
</script>

<template>
  <DataTable
    :value="dataBets?.data"
    :expanded-rows="expandedRows"
    striped-rows
    paginator
    :total-records="dataBets?.meta?.total"
    :rows="dataBets?.meta?.totalPerPage"
    lazy
    class="mb-4"
    table-class="w-full"
    scrollable
    scroll-height="40rem"
    data-key="id"
    @page="changePage"
  >
    <Column expander style="width: 5rem"></Column>
    <Column header="Количество событий">
      <template #body="{ data }">
        {{ data.events.length }}
      </template>
    </Column>
    <Column header="Общий коэффициент">
      <template #body="{ data }">
        {{ data.coefficient }}
      </template>
    </Column>
    <Column header="Статус">
      <template #body="{ data }">
        <Badge :severity="convertStatusToSeverity(data.status)" :value="convertStatusToString(data.status)"></Badge>
      </template>
    </Column>
    <template #empty>Таблица пустая</template>
    <template #expansion="{ data: eventsData }">
      <DataTable
        striped-rows
        :value="eventsData.events"
        class="mb-4"
        table-class="w-full"
        scrollable
        scroll-height="40rem"
      >
        <template #empty>Таблица пустая</template>
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
        <Column header="Коэффициент">
          <template #body="{ data }">
            <Badge :severity="convertStatusToSeverity(data.status)" :value="convertStatusToString(data.status)"></Badge>
          </template>
        </Column>
      </DataTable>
    </template>
  </DataTable>
</template>

<style scoped></style>
