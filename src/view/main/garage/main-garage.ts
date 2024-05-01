import View from "../../view";
import { CssClasses } from "../../../util/const/css-classes";
import { Tags } from "../../../util/const/tags";
import Controller from "./controller/controller";
import GameSpace from "./game-space/game-space";
import "./main-garage.css";

export default class MainGarage extends View {
  private mainGarage!: HTMLElement;

  constructor() {
    const params = {
      tag: Tags.MAIN,
      classNames: [CssClasses.MAINGARAGE],
    };
    super(params);
    this.mainGarage = this.getHtmlElement()!;
  }

  addController() {
    const controller = new Controller();
    controller.addItems();
    const gameSpace = new GameSpace();
    gameSpace.addItems();
    this.mainGarage.append(
      controller.getHtmlElement()!,
      gameSpace.getHtmlElement()!
    );
  }
}
