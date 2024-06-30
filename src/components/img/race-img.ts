import { Tags } from "../../util/const/tags";
import View from "../../view/view";

export default class RaceImg extends View {
  color: string;
  constructor(color: string, id: number) {
    const params = {
      tag: Tags.DIV,
    };
    super(params);
    this.color = color;
    this.viewElementCreator
      .getElement()!
      .setAttribute("class", "img-container");
    this.viewElementCreator.getElement()!.setAttribute("id", id.toString());
    this.getHtmlElement()!.innerHTML = `
    <svg class="race-img" height="100px" width="100px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
    viewBox="0 0 512 512"  xml:space="preserve">
 <style type="text/css">
 </style>
 <g>
   <path fill="${this.color}" d="M222.537,232.693h49.21l-0.469-12.424l-19.929-1.29c-0.423-0.062-0.782-0.359-0.938-0.782l-1.681-6.458
     c-0.141-0.399-0.078-0.86,0.156-1.212c0.25-0.351,0.657-0.563,1.095-0.563h18.951c-1.407-13.127-9.78-22.853-22.962-24.839
     c-18.741-2.815-33.228,10.602-30.93,26.708C215.978,218.386,219.261,228.714,222.537,232.693z M259.628,196.51l-5.293-0.344
     c0,0-2.432-3.135-4.527-5.575C251.903,190.591,257.189,192.686,259.628,196.51z"/>
   <path fill="${this.color}" d="M65.417,237.509c-28.796,0-52.142,23.346-52.142,52.149c0,28.804,23.346,52.149,52.142,52.149
     c28.804,0,52.149-23.346,52.149-52.149C117.566,260.856,94.221,237.509,65.417,237.509z M65.417,317.156
     c-15.176,0-27.49-12.298-27.49-27.498c0-15.191,12.314-27.49,27.49-27.49c15.2,0,27.498,12.299,27.498,27.49
     C92.915,304.858,80.617,317.156,65.417,317.156z"/>
   <path fill="${this.color}" d="M65.417,281.121c-4.707,0-8.522,3.831-8.522,8.538c0,4.715,3.815,8.538,8.522,8.538
     c4.715,0,8.546-3.823,8.546-8.538C73.963,284.952,70.132,281.121,65.417,281.121z"/>
   <path fill="${this.color}" d="M393.738,229.965c-38.874-5.817-78.622-9.453-110.967-11.72c-2.291,10.148-9.75,19.264-19.186,19.264
     c-11.376,0-51.203,0-51.203,0v-22.751v-44.566c-61.97,6.756-101.288,39.296-124.165,64.268
     c21.658,8.976,36.942,30.336,36.942,55.198c0,5.583-0.79,10.977-2.228,16.122h214.946c-1.439-5.145-2.228-10.539-2.228-16.122
     C335.647,257.275,361.557,230.84,393.738,229.965z"/>
   <path fill="${this.color}" d="M65.417,229.926c1.9,0,3.768,0.102,5.614,0.266l10.508-14.496v-33.173H0v83.439l8.741,4.902
     C16.646,247.111,39.061,229.926,65.417,229.926z"/>
   <path fill="${this.color}" d="M470.281,286.813v-9.476l18.021-9.476c0,0,3.331-11.04,3.331-18.624c-21.219-7.005-49.57-11.102-75.738-15.684
     c22.862,8.397,39.217,30.375,39.217,56.105c0,5.583-0.79,10.977-2.236,16.122H512v-18.967H470.281z"/>
   <path fill="${this.color}" d="M395.38,237.509c-28.796,0-52.15,23.346-52.15,52.149c0,28.804,23.354,52.149,52.15,52.149
     c28.804,0,52.149-23.346,52.149-52.149C447.529,260.856,424.184,237.509,395.38,237.509z M395.38,317.156
     c-15.192,0-27.498-12.298-27.498-27.498c0-15.191,12.306-27.49,27.498-27.49c15.184,0,27.498,12.299,27.498,27.49
     C422.878,304.858,410.564,317.156,395.38,317.156z"/>
   <path fill="${this.color}" d="M395.38,281.121c-4.715,0-8.538,3.831-8.538,8.538c0,4.715,3.823,8.538,8.538,8.538
     c4.715,0,8.53-3.823,8.53-8.538C403.91,284.952,400.095,281.121,395.38,281.121z"/>
 </g>
 </svg>
    `;
  }
}
