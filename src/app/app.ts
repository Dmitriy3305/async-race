import HeaderView from "../view/header/header-view";

export default class App {
    header: HeaderView | null;
   
    constructor() {
        this.header = null;
    }
    createView() {
        this.header = new HeaderView();
        this.header.addNav();
        document.body.append(this.header.getHtmlElement()!)
    }
}
