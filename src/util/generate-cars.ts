import RaceField from "../view/main/garage/game-space/race-field/race-field";
import { store } from "../store/store";
import { createCar } from "../api/create-car";
import { getRandomColor } from "./get-random-color";
import { getRandomName } from "./get-random-name";
import { hideRacefield } from "./hide-race-field";

export const generateCars = () => {
  const gameSpace = document.querySelector(".game-space");
  const raceCount = document.querySelector(".race-counter");

  for (let i = 0; i < 100; i++) {
    store.raceCount++;
    const color = getRandomColor();
    const name = getRandomName();
    raceCount!.innerHTML = `Garage (${store.raceCount})`;
    const raceField = new RaceField(color, store.raceCount, name);
    gameSpace?.appendChild(raceField.getHtmlElement()!);
    createCar(color, name);
    hideRacefield();
  }
};
