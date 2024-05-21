import { store } from "../store/store";
import { updateCar } from "../api/update-car";

export const updateRaceField = () => {
  const targetElement = store.raceField;
  const newName = store.nameForUpdate;
  if (targetElement! && newName) {
    const targetName = targetElement!.querySelector(".race-name");
    const id = targetElement!
      .querySelector(".img-container")
      ?.getAttribute("id")!;
    targetName!.innerHTML = newName;
    const targetColor = (
      document.querySelector("#color-for-update") as HTMLInputElement
    ).value;
    const targetImg = targetElement?.querySelector(".race-img") as SVGElement;
    if (targetImg) {
      const pathElements = targetImg.querySelectorAll("path");
      pathElements.forEach((path) => {
        path.setAttribute("fill", targetColor);
      });
    }
    updateCar(+id, targetColor, newName);
  }
};
