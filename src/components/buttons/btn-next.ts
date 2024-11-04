import { CssClasses } from "../../util/const/css-classes";
import { Tags } from "../../util/const/tags";
import { getNextPage } from "../../util/get-next-page";
import View from "../../view/view";

export default class BtnNext extends View {
  constructor() {
    const params = {
      tag: Tags.BTN,
      classNames: [CssClasses.BTN, CssClasses.NEXT],
      textContent: "NEXT",
      callback: () => getNextPage(),
    };
    super(params);
  }
}
