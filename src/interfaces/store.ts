export interface Store {
  nameForCreate: string;
  nameForUpdate: string;
  colorForCreate: string;
  colorForUpdate: string;
  raceCount: number;
  raceField: HTMLElement | null;
  currentPage: number;
  winners: Array<{}>
}
