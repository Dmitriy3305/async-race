import { getMotionParams } from "../api/get-motion-params";
import { MotionParams } from "../interfaces/motion-params";

export const prepareCar = async (raceField: HTMLElement) => {
  const targetElement = raceField.querySelector(
    ".img-container"
  ) as HTMLElement;
  const idTargetElement = Number(targetElement?.getAttribute("id"));
  if (idTargetElement) {
    const motionParams: MotionParams = await getMotionParams(
      idTargetElement,
      "started"
    );
    const time = motionParams.distance / motionParams.velocity;
    return { time, targetElement };
  }
  return null;
};
