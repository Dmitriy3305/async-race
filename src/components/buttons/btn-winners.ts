import { CssClasses } from "../../util/const/css-classes";
import { Tags } from "../../util/const/tags";
import View from "../../view/view";
import { changeMainComponent } from "../../util/change-main-component";

export default class BtnWinners extends View {
  constructor(mainWinners: HTMLElement, mainGarage: HTMLElement) {
    const params = {
      tag: Tags.BTN,
      classNames: [CssClasses.BTN],
      textContent: "TO WINNERS",
      callback: () => changeMainComponent(mainGarage, mainWinners),
    };
    super(params);
  }
}
