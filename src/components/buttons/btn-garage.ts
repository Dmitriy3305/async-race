import { CssClasses } from "../../util/const/css-classes";
import { Tags } from "../../util/const/tags";
import View from "../../view/view";
import { changeMainComponent } from "../../util/change-main-component";

export default class BtnGarage extends View {
  constructor(mainGarage: HTMLElement, mainWinners: HTMLElement) {
    const params = {
      tag: Tags.BTN,
      classNames: [CssClasses.BTN],
      textContent: "TO GARAGE",
      callback: () => changeMainComponent(mainWinners, mainGarage),
    };
    super(params);
  }
}
