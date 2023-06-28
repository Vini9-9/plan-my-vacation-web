import { Holiday } from "./Holiday";

export interface IdealPeriod {
  qtdDias: number,
  diaInicio:string,
  diaSemanaInicio: string,
  diaFim: string,
  diaSemanaFim: string,
  feriado: Holiday
}
