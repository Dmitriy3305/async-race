import { CssClasses } from "../../util/const/css-classes";
import { Tags } from "../../util/const/tags";
import { generateCars } from "../../util/generate-cars";
import View from "../../view/view";

export default class BtnGenerate extends View {
  constructor() {
    const params = {
      tag: Tags.BTN,
      classNames: [CssClasses.BTN],
      textContent: "GENERATE CARS",
      callback: () => generateCars(),
    };
    super(params);
  }
}
