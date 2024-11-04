export const getCurrentPage = () => {
  return parseInt(document.querySelector(".page-counter")!.innerHTML, 10) - 1;
};
