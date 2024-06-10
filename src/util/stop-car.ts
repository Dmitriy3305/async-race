import { getMotionParams } from "../api/get-motion-params";
import { stopAnimation } from "./stop-animation";

export const stopCar = async (raceField: HTMLElement) => {
  const targetElement = raceField.querySelector(
    ".img-container"
  ) as HTMLElement;
  const idTargetElement = Number(targetElement?.getAttribute("id"));
  if (idTargetElement) {
    await getMotionParams(idTargetElement, "stopped");
    stopAnimation(targetElement!);
  }
};
