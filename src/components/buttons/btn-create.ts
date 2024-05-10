import { CssClasses } from "../../util/const/css-classes";
import { Tags } from "../../util/const/tags";
import View from "../../view/view";
import { createRaceField } from "../../util/create-race-field";

export default class BtnCreate extends View {
  constructor() {
    const params = {
      tag: Tags.BTN,
      classNames: [CssClasses.BTN],
      textContent: "CREATE",
      callback: () => createRaceField(),
    };
    super(params);
  }
}
