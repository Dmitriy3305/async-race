import ElementCreator from "../util/element-creator";
import { ElementParams } from "../interfaces/element-params";

export default class View {
  viewElementCreator: ElementCreator;

  constructor(params: ElementParams) {
    this.viewElementCreator = this.createView(params);
  }

  getHtmlElement() {
    return this.viewElementCreator.getElement();
  }

  createView(params: ElementParams) {
    this.viewElementCreator = new ElementCreator(params);
    return this.viewElementCreator;
  }
}
