import { CssClasses } from "../../util/const/css-classes";
import { Tags } from "../../util/const/tags";
import { updateRaceField } from "../../util/update-race-field";
import View from "../../view/view";

export default class BtnUpdate extends View {
  constructor() {
    const params = {
      tag: Tags.BTN,
      classNames: [CssClasses.BTN],
      textContent: "UPDATE",
      callback: () => updateRaceField(),
    };
    super(params);
  }
}
