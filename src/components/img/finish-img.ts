import { CssClasses } from "../../util/const/css-classes";
import { Tags } from "../../util/const/tags";
import View from "../../view/view";

export default class FinishImg extends View {
  constructor() {
    const params = {
      tag: Tags.IMG,
      classNames: [CssClasses.FINISHIMG],
    };
    super(params);
    this.viewElementCreator
      .getElement()!
      .setAttribute("src", "../../../public/finish.svg");
    this.getHtmlElement()!.innerHTML = `
      <svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="800px" height="800px" viewBox="0 0 32 32" xml:space="preserve">
<style type="text/css">
	.avocado_een{fill:#231F20;}
	.avocado_drie{fill:#716558;}
	.avocado_zes{fill:#FFFAEE;}
	.st0{fill:#E0A838;}
	.st1{fill:#EAD13F;}
	.st2{fill:#788287;}
	.st3{fill:#DBD2C1;}
	.st4{fill:#3D3935;}
	.st5{fill:#6F9B45;}
	.st6{fill:#CC4121;}
	.st7{fill:#E598A3;}
	.st8{fill:#D36781;}
	.st9{fill:#8D3E93;}
	.st10{fill:#BF63C1;}
	.st11{fill:#A3AEB5;}
	.st12{fill:#AF9480;}
	.st13{fill:#0E608E;}
	.st14{fill:#248EBC;}
	.st15{fill:#D1712A;}
	.st16{fill:#C3CC6A;}
</style>
<g>
	<path class="avocado_zes" d="M1.521,11.518l10.163-4.209l4.209,10.163L5.73,21.68L1.521,11.518z M20.316,7.308l-3.234,7.808
		l1.379,3.33l7.808,3.234l4.209-10.163L20.316,7.308z"/>
	<polygon class="avocado_drie" points="21.567,25.944 17.082,15.116 20.316,7.308 18.469,6.543 16,12.503 13.531,6.543 
		11.684,7.308 15.893,17.471 13.538,18.446 10.433,25.944 12.28,26.709 16,17.729 19.72,26.709 	"/>
	<path class="avocado_een" d="M23.293,14.494l-2.772-1.148l1.148-2.772l2.772,1.148L23.293,14.494z M26.065,15.642
		l-2.772-1.148l-1.148,2.772l2.772,1.148L26.065,15.642z M11.479,13.346l-1.148-2.772l-2.772,1.148l1.148,2.772L11.479,13.346z
		 M8.707,14.494l-2.772,1.148l1.148,2.772l2.772-1.148L8.707,14.494z M26.54,22.333l-7.154-2.963l2.835,6.845l-2.772,1.148
		L16,19.035l-3.449,8.327l-2.772-1.148l2.835-6.845L5.46,22.333L0.868,11.247l12.934-5.358L16,11.196l2.198-5.307l12.934,5.358
		L26.54,22.333z M16.541,12.503l0.541,1.307l2.581-6.231l-0.924-0.383L16.541,12.503z M10.62,19.114l-0.765-1.848l2.772-1.148
		l0.765,1.848L15.24,17.2l-0.765-1.848l-1.848,0.765l-1.148-2.772l1.848-0.765l-1.148-2.772l-1.848,0.765L9.565,8.727L6.794,9.875
		l0.765,1.848l-2.772,1.148l-0.765-1.848l-1.848,0.765l0.765,1.848l1.848-0.765l1.148,2.772l-1.848,0.765l1.148,2.772l1.848-0.765
		l0.765,1.848L10.62,19.114z M15.227,18.288l-1.307,0.541l-2.835,6.845l0.924,0.383L15.227,18.288z M20.914,25.674L13.261,7.196
		l-0.924,0.383l7.654,18.478L20.914,25.674z M24.151,20.262l0.765-1.848l1.848,0.765l1.148-2.772l-1.848-0.765l1.148-2.772
		l1.848,0.765l0.765-1.848l-1.848-0.765l-0.765,1.848l-2.772-1.148l0.765-1.848l-2.772-1.148l-0.765,1.848l-1.848-0.765
		l-1.148,2.772l1.848,0.765l-1.148,2.772l-1.611-0.667l0.944,2.279l0.667-1.611l2.772,1.148l-0.765,1.848L24.151,20.262z"/>
</g>
</svg>
      `;
  }
}
