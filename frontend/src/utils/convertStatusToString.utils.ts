import { StatusEventEnum } from "@/enums/status-event.enum";
import { useI18n } from "vue-i18n";

export function convertStatusToString(status: StatusEventEnum) {
  const { t } = useI18n();

  switch (status) {
    case StatusEventEnum.LOSE:
      return t("bet-entity.status.LOSE");
    case StatusEventEnum.NOT_CALCULATED:
      return t("bet-entity.status.NOT_CALCULATED");
    case StatusEventEnum.RETURN:
      return t("bet-entity.status.RETURN");
    case StatusEventEnum.WIN:
      return t("bet-entity.status.WIN");
    default:
      return "Неопознанный тип";
  }
}
