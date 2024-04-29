import { CssClasses } from "../../util/const/css-classes";
import { Tags } from "../../util/const/tags";
import View from "../../view/view";

export default class InputReadOnly extends View {
  constructor() {
    const params = {
      tag: Tags.INPUT,
      classNames: [CssClasses.INPUT],
    };
    super(params);
    this.viewElementCreator.getElement()!.setAttribute("readonly", "readonly");
  }
}