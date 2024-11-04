export const returnToGarage = () => {
  const container = document.querySelector(".modal-window") as HTMLElement;  
  container.remove()
  const header = document.querySelector(".header") as HTMLElement;
  const main = document.querySelector(".main-garage") as HTMLElement;
  if (header) header.style.display = "flex";
  if (main) main.style.display = "flex";
};
