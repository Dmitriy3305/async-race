import { ElementParams } from "../interfaces/element-params";

export default class ElementCreator {
  private element: HTMLElement | null;
  constructor(params: ElementParams) {
    this.element = null;
    this.createElement(params);
  }

  getElement(): HTMLElement | null {
    return this.element;
  }

  addInnerElement(element: ElementCreator | HTMLElement): void {
    if (element instanceof ElementCreator) {
      this.element!.append(element.getElement()!);
    } else {
      this.element!.append(element);
    }
  }

  createElement(params: ElementParams) {
    this.element = document.createElement(params.tag);
    this.setCssClasses(params.classNames);
    this.setTextContent(params.textContent);
    this.setCallback(params.callback);
  }
  setCssClasses(cssClasses: string[] = []) {
    cssClasses.forEach((cssClass) => this.element!.classList.add(cssClass));
  }

  setTextContent(text = "") {
    this.element!.textContent = text;
  }

  setCallback(callback: Function | undefined) {
    if (typeof callback === "function") {
      this.element!.addEventListener("click", (event) => callback(event));
    }
  }
}
