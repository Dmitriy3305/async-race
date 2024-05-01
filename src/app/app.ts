import HeaderView from "../view/header/header-view";
import MainGarage from "../view/main/garage/main-garage";
import MainWinners from "../view/main/winners/main-winners";
import "../style.css";

export default class App {
  header: HeaderView | null;
  mainGarage: MainGarage | null;
  mainWinners: MainWinners | null;

  constructor() {
    this.header = null;
    this.mainGarage = null;
    this.mainWinners = null;
  }
  createView() {
    this.mainGarage = new MainGarage();
    this.mainGarage.addController();
    this.mainWinners = new MainWinners();
    this.header = new HeaderView();
    this.header.addNav(
      this.mainGarage.getHtmlElement()!,
      this.mainWinners.getHtmlElement()!
    );
    document.body.append(
      this.header.getHtmlElement()!,
      this.mainGarage.getHtmlElement()!
    );
  }
}
