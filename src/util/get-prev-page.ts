import { getCurrentPage } from "./get-current-page";
import { updatePageCounter } from "./update-page-counter";
import { updatePageDisplay } from "./update-page-display";

export const getPrevPage = () => {
  let currentPage = getCurrentPage();
  const currentPageElement = document.querySelector(".page-counter")!;
  const raceFields = document.querySelectorAll(".race-field");
  const itemsPerPage = 5;
  const totalItems = raceFields.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  currentPage--;
  if (currentPage < 0) {
    currentPage = totalPages - 1;
  }

  updatePageDisplay(raceFields, currentPage, itemsPerPage);
  updatePageCounter(currentPageElement, currentPage);
};
