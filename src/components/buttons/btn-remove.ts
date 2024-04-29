import { CssClasses } from "../../util/const/css-classes";
import { Tags } from "../../util/const/tags";
import View from "../../view/view";

export default class BtnRemove extends View {
  constructor() {
    const params = {
      tag: Tags.BTN,
      classNames: [CssClasses.BTN],
      textContent: "REMOVE",
      callback: () => console.log("Button clicked"),
    };
    super(params);
  }
}
