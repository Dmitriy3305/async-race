import BtnReturnToGarage from "../components/buttons/btn-return-to-garage";
import ModalWindow from "../components/modal-window/modal-window";
import { Winner } from "../interfaces/winner";
import { store } from "../store/store";

export const showWinner = (winner: Winner) => {
  const raceName =
    winner.targetElement.parentNode!.querySelector(".race-name")?.textContent;
  const raceImg = winner.targetElement.querySelector(".race-img");
  const header = document.querySelector(".header") as HTMLElement;
  const main = document.querySelector(".main-garage") as HTMLElement;
  const modalWindow = new ModalWindow();
  const modalContent = modalWindow.getHtmlElement();
  const time = (winner.time / 1000).toFixed(2);
  modalContent!.innerHTML = `
       <h2>${raceName} winner with a time of ${time}s</h2>
    `;
  if (header) header.style.display = "none";
  if (main) main.style.display = "none";
  const btnReturnToGarage = new BtnReturnToGarage();
  modalWindow
    .getHtmlElement()!
    .appendChild(btnReturnToGarage.getHtmlElement()!);
  const body = document.querySelector("body");
  body?.append(modalWindow.getHtmlElement()!);
  store.winners.push({raceName, raceImg, time});
};
