import { CssClasses } from "../../../../util/const/css-classes";
import { Tags } from "../../../../util/const/tags";
import View from "../../../view";
import InputCreate from "../../../../components/inputs/input-for-create";
import InputColor from "../../../../components/inputs/input-color";
import BtnCreate from "../../../../components/buttons/btn-create";
import InputForUpdate from "../../../../components/inputs/input-for-update";
import BtnUpdate from "../../../../components/buttons/btn-update";
import BtnRace from "../../../../components/buttons/btn-race";
import BtnGenerate from "../../../../components/buttons/btn-generate";
import "./controller.css";

export default class Controller extends View {
  private controller!: HTMLElement;

  constructor() {
    const params = {
      tag: Tags.SECTION,
      classNames: [CssClasses.CONTROLLER],
    };
    super(params);
    this.controller = this.getHtmlElement()!;
  }

  addItems() {
    const inputCreate = new InputCreate().getHtmlElement()!;
    const inputNewColor = new InputColor().getHtmlElement()!;
    inputNewColor.setAttribute("id", "color-for-create");
    const btnCreate = new BtnCreate().getHtmlElement()!;
    const inputForUpdate = new InputForUpdate().getHtmlElement()!;
    const inputChangeColor = new InputColor().getHtmlElement()!;
    inputChangeColor.setAttribute("id", "color-for-update");
    const btnUpdate = new BtnUpdate().getHtmlElement()!;
    const btnRace = new BtnRace().getHtmlElement()!;
    const btnGenerate = new BtnGenerate().getHtmlElement()!;
    this.controller.append(
      inputCreate,
      inputNewColor,
      btnCreate,
      inputForUpdate,
      inputChangeColor,
      btnUpdate,
      btnRace,
      btnGenerate
    );
  }
}
