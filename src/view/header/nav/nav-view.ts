import View from "../../view";
import { CssClasses } from "../../../util/const/css-classes";
import { Tags } from "../../../util/const/tags";
import './nav-view.css';
import BtnGarage from "../../../components/buttons/btn-garage";
import BtnWinners from "../../../components/buttons/btn-winners";
import './nav-view.css'

export default class NavView extends View {
  private navElement!: HTMLElement;

  constructor() {
    const params = {
      tag: Tags.NAV,
      classNames: [CssClasses.NAV],
    };
    super(params);
    this.navElement = this.getHtmlElement()!;
  }
  addBtn() {
    const btnGarage = new BtnGarage();
    const btnWinners = new BtnWinners();
    this.navElement.append(btnGarage.getHtmlElement()!, btnWinners.getHtmlElement()!)
  }
}
