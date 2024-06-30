import BtnReturnToGarage from "../components/buttons/btn-return-to-garage";
import ModalWindow from "../components/modal-window/modal-window";
import { Winner } from "../interfaces/winner";
import { store } from "../store/store";

export const showWinner = (winner: Winner) => {
  if (!winner.raceImg) {
    return;
  }
  
  const parentElement = winner.raceImg.parentNode as HTMLElement | null;

  if (!parentElement) {
    return;
  }

  const raceNameElement = parentElement.querySelector(".race-name");
  const raceName = raceNameElement ? raceNameElement.textContent : undefined;
  const raceImg = winner.raceImg.querySelector(
    ".race-img"
  ) as HTMLElement | null;

  if (!raceName || !raceImg) {
    return;
  }

  const header = document.querySelector(".header") as HTMLElement;
  const main = document.querySelector(".main-garage") as HTMLElement;
  const modalWindow = new ModalWindow();
  const modalContent = modalWindow.getHtmlElement()!;
  const time = Number(parseFloat(String((winner.time / 1000).toFixed(2))));

  if (modalContent) {
    modalContent.innerHTML = `
       <h2>${raceName} winner with a time of ${time}s</h2>
    `;
  }

  if (header) header.style.display = "none";
  if (main) main.style.display = "none";

  const btnReturnToGarage = new BtnReturnToGarage();

  if (modalContent) {
    modalContent.appendChild(btnReturnToGarage.getHtmlElement()!);
  }

  const body = document.querySelector("body");
  if (body) {
    body.append(modalContent!);
  }
  store.winners.push({ raceName, raceImg, time });
};
