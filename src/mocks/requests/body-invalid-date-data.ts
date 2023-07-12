import { PeriodRequest } from "src/app/model/PeriodRequest";

export const BODY_INVALID_DATE: PeriodRequest = {
  "dataInicio": "2023-01-31",
  "dataFim": "2023-01-01",
  "estado": "SP",
  "cidade": "São Paulo",
  "qtdDias": "10"
}
