import View from "../view";
import NavView from "./nav/nav-view";
import { CssClasses } from "../../util/const/css-classes";
import { Tags } from "../../util/const/tags";

export default class HeaderView extends View {
  private headerElement: HTMLElement;

  constructor() {
    const params = {
      tag: Tags.HEADER,
      classNames: [CssClasses.HEADER],
    };
    super(params);
    this.headerElement = this.getHtmlElement()!;
  }

  addNav() {
    const navView = new NavView();
    this.headerElement.appendChild(navView.getHtmlElement()!);
    navView.addBtn();
  }
}
