import { State } from "src/app/model/State";
import { STATES_DATA } from "../responses/states";

export function setupSortedStates(): State[] {
  return STATES_DATA.sort((a: State, b: State) => a.sigla.localeCompare(b.sigla));
}
