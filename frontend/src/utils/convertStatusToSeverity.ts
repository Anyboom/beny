import { StatusEventEnum } from "@/enums/status-event.enum";

export function convertStatusToSeverity(status: StatusEventEnum) {
  switch (status) {
    case StatusEventEnum.LOSE:
      return "danger";
    case StatusEventEnum.NOT_CALCULATED:
      return "secondary";
    case StatusEventEnum.RETURN:
      return "info";
    case StatusEventEnum.WIN:
      return "success";
    default:
      return "contrast";
  }
}
