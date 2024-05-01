import View from "../../../../../view/view";
import { CssClasses } from "../../../../../util/const/css-classes";
import { Tags } from "../../../../../util/const/tags";
import "./race-counter.css";

export default class RaceCounter extends View {
  constructor(count: number) {
    const params = {
      tag: Tags.DIV,
      classNames: [CssClasses.RACECOUNTER],
      textContent: `Garage (${count})`,
    };
    super(params);
  }
}
