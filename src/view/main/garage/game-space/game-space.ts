import { CssClasses } from "../../../../util/const/css-classes";
import { Tags } from "../../../../util/const/tags";
import View from "../../../view";
import RaceCounter from "./race-counter/race-counter";
import PageCounter from "./page-counter/page-counter";
import RaceField from "./race-field/race-field";
import "./game-space.css";
import { getCars } from "../../../../api/getCars";
import { Car } from "../../../../interfaces/car";
import { store } from "../../../../store/store";

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
    const pageCounter = new PageCounter(5).getHtmlElement()!;
    this.gameSpace.append(raceCounter, pageCounter);
    carsData.forEach((car) => {
      const raceField = new RaceField(
        car.color,
        car.id,
        car.name
      ).getHtmlElement()!;
      this.gameSpace.appendChild(raceField);
    });
  }

  public addRaceField(raceField: HTMLElement) {
    this.gameSpace.appendChild(raceField);
  }
}
