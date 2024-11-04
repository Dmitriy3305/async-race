import { deleteCar } from "../api/delete-car";
import { store } from "../store/store";

export const deleteRaceField = (raceField: HTMLElement) => {
  const gameSpace = document.querySelector(".game-space");
  const idTargetElelment = raceField
    .querySelector(".img-container")
    ?.getAttribute("id");
  const raceCounter = gameSpace?.querySelector(".race-counter");
  gameSpace?.removeChild(raceField);
  store.raceCount = store.raceCount - 1;
  raceCounter!.innerHTML = `Garage (${store.raceCount})`;
  deleteCar(+idTargetElelment!);
};
