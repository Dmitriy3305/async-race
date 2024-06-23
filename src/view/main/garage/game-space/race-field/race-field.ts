import { CssClasses } from "../../../../../util/const/css-classes";
import { Tags } from "../../../../../util/const/tags";
import View from "../../../../view";
import BtnSelect from "../../../../../components/buttons/btn-select";
import BtnRemove from "../../../../../components/buttons/btn-remove";
import RaceName from "./race-name/race-name";
import BtnStart from "../../../../../components/buttons/btn-start";
import BtnStop from "../../../../../components/buttons/btn-stop";
import RaceImg from "../../../../../components/img/race-img";
import FinishImg from "../../../../../components/img/finish-img";
import Container from "../../../../../components/container/container";
import "./race-field.css";

export default class RaceField extends View {
  private raceField!: HTMLElement;

  constructor(color: string, id: number, name: string) {
    const params = {
      tag: Tags.DIV,
      classNames: [CssClasses.RACEFIELD],
    };
    super(params);
    this.raceField = this.getHtmlElement()!;
    this.addItems(color, id, name);
  }

  addItems(color: string, id: number, name: string) {
    const container = new Container().getHtmlElement()!;
    container.append();
    const btnSelect = new BtnSelect();
    const btnRemove = new BtnRemove();
    const raceName = new RaceName(name);
    const btnStart = new BtnStart();
    const btnStop = new BtnStop();
    const raceImg = new RaceImg(color, id);
    raceImg.getHtmlElement()!.setAttribute("color", color);
    const finishImg = new FinishImg();
    container.append(
      btnSelect.getHtmlElement()!,
      btnRemove.getHtmlElement()!,
      raceName.getHtmlElement()!,
      btnStart.getHtmlElement()!,
      btnStop.getHtmlElement()!,
      raceImg.getHtmlElement()!
    );
    this.raceField.append(container, finishImg.getHtmlElement()!);
  }
}
