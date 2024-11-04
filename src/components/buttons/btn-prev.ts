import { CssClasses } from "../../util/const/css-classes";
import { Tags } from "../../util/const/tags";
import { getPrevPage } from "../../util/get-prev-page";
import View from "../../view/view";

export default class BtnPrev extends View {
  constructor() {
    const params = {
      tag: Tags.BTN,
      classNames: [CssClasses.BTN, CssClasses.PREV],
      textContent: "PREV",
      callback: () => getPrevPage(),
    };
    super(params);
  }
}
