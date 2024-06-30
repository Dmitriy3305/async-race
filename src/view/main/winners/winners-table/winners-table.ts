import View from "../../../view";
import { CssClasses } from "../../../../util/const/css-classes";
import { Tags } from "../../../../util/const/tags";
import './winners-table.css';

export default class WinnersTable extends View {
  constructor() {
    const params = {
      tag: Tags.DIV,
      classNames: [CssClasses.WINNERSTABLE],
    };
    super(params);
  }
}
