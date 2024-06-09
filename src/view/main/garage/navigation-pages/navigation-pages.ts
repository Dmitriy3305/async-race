import { CssClasses } from "../../../../util/const/css-classes";
import { Tags } from "../../../../util/const/tags";
import View from "../../../view";
import BtnPrev from "../../../../components/buttons/btn-prev";
import BtnNext from "../../../../components/buttons/btn-next";
import PageCounter from "../game-space/page-counter/page-counter";
import "./navigation-pages.css";

export default class NavPages extends View {
  private navPages!: HTMLElement;

  constructor() {
    const params = {
      tag: Tags.SECTION,
      classNames: [CssClasses.NAVPAGES],
    };
    super(params);
    this.navPages = this.getHtmlElement()!;
  }

  addItems() {
    const pageCounter = new PageCounter().getHtmlElement()!;
    const btnPrev = new BtnPrev().getHtmlElement()!;
    const btnNext = new BtnNext().getHtmlElement()!;
    this.navPages.append(btnPrev, pageCounter, btnNext);
  }
}
