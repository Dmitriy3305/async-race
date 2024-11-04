import { CssClasses } from "../../util/const/css-classes";
import { Tags } from "../../util/const/tags";
import View from "../../view/view";
import "./modal-window.css";

export default class ModalWindow extends View {
  constructor() {
    const params = {
      tag: Tags.DIV,
      classNames: [CssClasses.MODALWINDOW],
    };
    super(params);
  }
}
