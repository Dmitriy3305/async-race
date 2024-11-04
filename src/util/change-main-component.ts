import { updateWinnersCounter } from "./update-winners-couner";
import { updateWinnersTable } from "./update-winners-table";

export const changeMainComponent = (
  componentToRemove: HTMLElement,
  componentToAdd: HTMLElement
) => {
  componentToRemove.remove();
  document.body.append(componentToAdd);
  if (componentToAdd.classList.contains("main-winners")) {
    updateWinnersTable();
    updateWinnersCounter();
  }
};
