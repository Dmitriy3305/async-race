import View from "../../view";
import { CssClasses } from "../../../util/const/css-classes";
import { Tags } from "../../../util/const/tags";
import WinnersCounter from "./winners-counter/winners-counter";
import { store } from "../../../store/store";
import WinnersTable from "./winners-table/winners-table";

export default class MainWinners extends View {
  mainWinners: HTMLElement;

  constructor() {
    const params = {
      tag: Tags.MAIN,
      classNames: [CssClasses.MAINWINNERS],
    };
    super(params);
    this.mainWinners = this.getHtmlElement()!;
    this.createWinnersCounter();
    this.createWinnersTable();
  }

  createWinnersCounter() {
    const winnersCounter = new WinnersCounter(
      store.winners.length
    ).getHtmlElement()!;
    this.mainWinners.append(winnersCounter);
  }

  createWinnersTable() {
    const winnersTable = new WinnersTable().getHtmlElement()!;
    this.mainWinners.append(winnersTable);
  }
}
