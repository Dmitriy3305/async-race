import HeaderView from "../view/header/header-view";
import MainGarage from "../view/main/garage/main-garage";
import "../style.css";

export default class App {
  header: HeaderView | null;
  mainGarage: MainGarage | null;

  constructor() {
    this.header = null;
    this.mainGarage = null;
  }
  createView() {
    this.header = new HeaderView();
    this.header.addNav();
    this.mainGarage = new MainGarage();
    this.mainGarage.addController();
    document.body.append(
      this.header.getHtmlElement()!,
      this.mainGarage.getHtmlElement()!
    );
  }
}
