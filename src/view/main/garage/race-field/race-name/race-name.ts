import { CssClasses } from "../../../../../util/const/css-classes";
import { Tags } from "../../../../../util/const/tags";
import View from "../../../../view";

export default class RaceName extends View {

  constructor(name: string) {
    const params = {
      tag: Tags.DIV,
      classNames: [CssClasses.RACENAME],
      textContent: `${name}`,
    };
    super(params);
  }
}
