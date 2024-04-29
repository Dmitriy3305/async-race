import View from "../../../../../view/view";
import { CssClasses } from "../../../../../util/const/css-classes";
import { Tags } from "../../../../../util/const/tags";

export default class PageCounter extends View {

  constructor(count: number) {
    const params = {
      tag: Tags.DIV,
      classNames: [CssClasses.PAGECOUNTER],
      textContent: `Page #${count}`,
    };
    super(params);
  }
}
