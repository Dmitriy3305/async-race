import { CssClasses } from "../../util/const/css-classes";
import { Tags } from "../../util/const/tags";
import View from "../../view/view";

export default class BtnRace extends View {
  constructor() {
    const params = {
      tag: Tags.BTN,
      classNames: [CssClasses.BTN],
      textContent: "RACE",
      callback: () => console.log("Button clicked"),
    };
    super(params);
  }
}
