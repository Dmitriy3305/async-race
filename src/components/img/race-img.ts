import { CssClasses } from "../../util/const/css-classes";
import { Tags } from "../../util/const/tags";
import View from "../../view/view";

export default class RaceImg extends View {
  constructor() {
    const params = {
      tag: Tags.IMG,
      classNames: [CssClasses.RACEIMG],
    };
    super(params);
    this.viewElementCreator
      .getElement()!
      .setAttribute("src", "../../../public/race-car.svg");
    this.viewElementCreator.getElement()!.setAttribute("fill", "#aaa");
  }
}
