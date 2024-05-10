import { CssClasses } from "../../util/const/css-classes";
import { Tags } from "../../util/const/tags";
import View from "../../view/view";
import { store } from "../../store/store";

export default class InputColor extends View {
  constructor() {
    const params = {
      tag: Tags.INPUT,
      classNames: [CssClasses.INPUT],
    };
    super(params);
    this.viewElementCreator.getElement()!.setAttribute("type", "color");
    this.updateValueOnStore(
      this.viewElementCreator.getElement()! as HTMLInputElement
    );
    this.viewElementCreator
      .getElement()!
      .setAttribute("value", "#008614");
  }

  updateValueOnStore(input: HTMLInputElement) {
    input.addEventListener(
      "change",
      () => (store.colorForCreate = input.value)
    );
  }
}
