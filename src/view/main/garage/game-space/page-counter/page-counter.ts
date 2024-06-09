import View from "../../../../../view/view";
import { CssClasses } from "../../../../../util/const/css-classes";
import { Tags } from "../../../../../util/const/tags";
import { store } from "../../../../../store/store";

export default class PageCounter extends View {
  constructor() {
    const params = {
      tag: Tags.DIV,
      classNames: [CssClasses.PAGECOUNTER],
      textContent: `${store.currentPage}`,
    };
    super(params);
  }
}
