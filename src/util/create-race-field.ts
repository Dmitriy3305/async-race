import RaceField from "../view/main/garage/game-space/race-field/race-field";
import { store } from "../store/store";
import { createCar } from "../api/create-car";

export const createRaceField = () => {
  const gameSpace = document.querySelector(".game-space");
  const raceCount = document.querySelector(".race-counter");
  store.raceCount++;
  raceCount!.innerHTML = `Garage (${store.raceCount})`;
  const raceField = new RaceField(
    store.colorForCreate,
    store.raceCount,
    store.nameForCreate
  );
  gameSpace?.appendChild(raceField.getHtmlElement()!);

  createCar(store.colorForCreate, store.nameForCreate);
};
