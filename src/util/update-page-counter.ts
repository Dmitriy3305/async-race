export const updatePageCounter = (
  currentPageElement: Element,
  currentPage: number
) => {
  currentPageElement.innerHTML = `${currentPage + 1}`;
};
