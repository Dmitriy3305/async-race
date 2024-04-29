import { CssClasses } from "../../../../util/const/css-classes";
import { Tags } from "../../../../util/const/tags";
import View from "../../../view";
import RaceCounter from "./race-counter/race-counter";
import PageCounter from "./page-counter/page-counter";
import RaceField from "../race-field/race-field";

export default class GameSpace extends View {
  private gameSpace!: HTMLElement;

  constructor() {
    const params = {
      tag: Tags.SECTION,
      classNames: [CssClasses.GAMESPACE],
    };
    super(params);
    this.gameSpace = this.getHtmlElement()!;
  }

  addItems() {
    const raceCounter = new RaceCounter(5).getHtmlElement()!;
    const pageCounter = new PageCounter(5).getHtmlElement()!;
    const raceField = new RaceField().getHtmlElement()!;
    this.gameSpace.append(
      raceCounter,
      pageCounter,
      raceField
    );
  }
}
