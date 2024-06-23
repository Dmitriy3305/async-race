import { CssClasses } from "../../../../util/const/css-classes";
import { Tags } from "../../../../util/const/tags";
import View from "../../../view";
import RaceCounter from "./race-counter/race-counter";
import RaceField from "./race-field/race-field";
import "./game-space.css";
import { getCars } from "../../../../api/get-cars";
import { Car } from "../../../../interfaces/car";
import { store } from "../../../../store/store";
import { selectCar } from "../../../../util/select-car";
import { deleteRaceField } from "../../../../util/delete-race-field";
import { startCar } from "../../../../util/start-car";
import { hideRacefield } from "../../../../util/hide-race-field";
import { stopCar } from "../../../../util/stop-car";
import { prepareCar } from "../../../../util/prepare-car";
import { animateCar } from "../../../../util/animate-car";

export default class GameSpace extends View {
  private gameSpace!: HTMLElement;

  constructor() {
    const params = {
      tag: Tags.SECTION,
      classNames: [CssClasses.GAMESPACE],
    };
    super(params);
    this.gameSpace = this.getHtmlElement()!;
    this.loadCars();
    this.getHtmlElement()!.addEventListener("click", (event) => {
      this.handleClick(event);
    });
  }

  async loadCars() {
    try {
      const carsData = await getCars();
      if (carsData) {
        this.addItems(carsData);
      }
    } catch (error) {
      console.error("Failed to load cars data:", error);
    }
  }

  addItems(carsData: Car[]) {
    const raceCounter = new RaceCounter(store.raceCount).getHtmlElement()!;
    this.gameSpace.append(raceCounter);
    carsData.forEach((car) => {
      const raceField = new RaceField(
        car.color,
        car.id,
        car.name
      ).getHtmlElement()!;
      this.gameSpace.appendChild(raceField);
      hideRacefield();
    });
  }

  public addRaceField(raceField: HTMLElement) {
    this.gameSpace.appendChild(raceField);
  }

  handleClick(event: MouseEvent) {
    const buttonClicked = event.target as HTMLElement;
    const containerTarget = buttonClicked.parentElement;
    const raceFieldTarget = containerTarget?.parentElement;

    switch (buttonClicked.textContent) {
      case "SELECT":
        selectCar(raceFieldTarget!);
        break;
      case "REMOVE":
        deleteRaceField(raceFieldTarget!);
        break;
      case "START":
        prepareCar(raceFieldTarget!).then((carInfo) => {
          if (carInfo) {
            animateCar(carInfo.time, carInfo.raceImg);
            startCar(raceFieldTarget!);
          }
        });
        break;
      case "STOP":
        stopCar(raceFieldTarget!);
        break;
      default:
    }
  }
}
