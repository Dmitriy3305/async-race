import { CssClasses } from "../../util/const/css-classes";
import { Tags } from "../../util/const/tags";
import View from "../../view/view";

export default class FinishImg extends View {
  constructor() {
    const params = {
      tag: Tags.IMG,
      classNames: [CssClasses.FINISHIMG],
    };
    super(params);
    this.viewElementCreator.getElement()!.setAttribute("src", "../../../public/finish.svg");
  }
}