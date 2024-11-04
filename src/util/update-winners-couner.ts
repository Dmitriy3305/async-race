import { store } from "../store/store";

export const updateWinnersCounter = () => {
  const winnersCounter = document.querySelector(".winners-counter")!;
  winnersCounter.innerHTML = `Winners (${store.winners.length})`;
};
