import View from "../../view";
import { CssClasses } from "../../../util/const/css-classes";
import { Tags } from "../../../util/const/tags";
import './nav-view.css';

export default class NavView extends View {
  constructor() {
    const params = {
      tag: Tags.NAV,
      classNames: [CssClasses.NAV],
    };
    super(params);
  }
}
