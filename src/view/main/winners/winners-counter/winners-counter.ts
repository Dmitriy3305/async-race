import View from "../../../view";
import { CssClasses } from "../../../../util/const/css-classes";
import { Tags } from "../../../../util/const/tags";
import "./winners-counter.css";

export default class WinnersCounter extends View {
  constructor(count: number) {
    const params = {
      tag: Tags.DIV,
      classNames: [CssClasses.WINNERSOUNTER],
      textContent: `Winners (${count})`,
    };
    super(params);
  }
}
