import { CssClasses } from "../../util/const/css-classes";
import { Tags } from "../../util/const/tags";
import View from "../../view/view";
import { store } from "../../store/store";

export default class InputForUpdate extends View {
  constructor() {
    const params = {
      tag: Tags.INPUT,
      classNames: [CssClasses.INPUT],
    };
    super(params);
    this.updateValueOnStore(
      this.viewElementCreator.getElement()! as HTMLInputElement
    );
    this.getHtmlElement()!.setAttribute("id", "input-for-update");
  }

  updateValueOnStore(input: HTMLInputElement) {
    input.addEventListener(
      "change",
      () => ((store.nameForUpdate = input.value), console.log(store))
    );
  }
}
