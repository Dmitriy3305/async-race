import { switchEngineToDrive } from "../api/switch-engine-to-drive";
import { getCrash } from "./get-crash";

export const startCar = async (raceField: HTMLElement) => {
  const targetElement = raceField.querySelector(
    ".img-container"
  ) as HTMLElement;
  const idTargetElement = Number(targetElement?.getAttribute("id"));
  if (idTargetElement) {
    const response = await switchEngineToDrive(idTargetElement);
    if (response!.success === false) {
      getCrash(targetElement!);
    }
  }
};
