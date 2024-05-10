import { CssClasses } from "../../util/const/css-classes";
import { Tags } from "../../util/const/tags";
import View from "../../view/view";

export default class Container extends View {
  constructor() {
    const params = {
      tag: Tags.DIV,
      classNames: [CssClasses.CONTAINER],
    };
    super(params);
  }
}
