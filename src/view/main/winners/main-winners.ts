import View from "../../view";
import { CssClasses } from "../../../util/const/css-classes";
import { Tags } from "../../../util/const/tags";
import PageCounter from "./page-counter/page-counter";
import WinnersCounter from "./winners-counter/winners-counter";
import './main-winners.css';

export default class MainWinners extends View {
  mainWinners: HTMLElement;

  constructor() {
    const params = {
      tag: Tags.MAIN,
      classNames: [CssClasses.MAINWINNERS],
    };
    super(params);
    this.mainWinners = this.getHtmlElement()!;
    this.addItems();
  }

  addItems() {
    const pageCounter = new PageCounter(5).getHtmlElement()!;
    const winnersCounter = new WinnersCounter(5).getHtmlElement()!;
    this.mainWinners.append(winnersCounter, pageCounter);
  }
}
