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
import Container from "../../../../components/container/container";

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
    const containerCreate = new Container().getHtmlElement()!;
    containerCreate.setAttribute("class", "container-create");
    const inputCreate = new InputCreate().getHtmlElement()!;
    const inputNewColor = new InputColor().getHtmlElement()!;
    inputNewColor.setAttribute("id", "color-for-create");
    const btnCreate = new BtnCreate().getHtmlElement()!;
    containerCreate.append(inputCreate, inputNewColor, btnCreate);
    const containerUpdate = new Container().getHtmlElement()!;
    containerUpdate.setAttribute("class", "container-update");
    const inputForUpdate = new InputForUpdate().getHtmlElement()!;
    const inputChangeColor = new InputColor().getHtmlElement()!;
    inputChangeColor.setAttribute("id", "color-for-update");
    const btnUpdate = new BtnUpdate().getHtmlElement()!;
    containerUpdate.append(inputForUpdate, inputChangeColor, btnUpdate);
    const containerRaceGenerate = new Container().getHtmlElement()!;
    containerRaceGenerate.setAttribute("class", "container-race-generate");
    const btnRace = new BtnRace().getHtmlElement()!;
    const btnGenerate = new BtnGenerate().getHtmlElement()!;
    containerRaceGenerate.append(btnRace, btnGenerate);
    this.controller.append(
      containerCreate,
      containerUpdate,
      containerRaceGenerate
    );
  }
}
