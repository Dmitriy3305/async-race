import View from "../../../view";
import { CssClasses } from "../../../../util/const/css-classes";
import { Tags } from "../../../../util/const/tags";

export default class WinnerString extends View {
  constructor() {
    const params = {
      tag: Tags.DIV,
      classNames: [CssClasses.WINNERSSTRING],
    };
    super(params);
  }
}
