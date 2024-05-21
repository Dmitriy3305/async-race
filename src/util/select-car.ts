import { store } from "../store/store";

export const selectCar = (raceField: HTMLElement) => {
  store.raceField = raceField;
  const containerElements = raceField.querySelector(".container");
  const raceNameElement = containerElements!.querySelector(".race-name");
  store.nameForUpdate = raceNameElement!.textContent!;
  const inputForUpdate = document.querySelector("#input-for-update") as HTMLInputElement;
  inputForUpdate.value = store.nameForUpdate;
};
