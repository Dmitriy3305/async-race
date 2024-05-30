import { getMotionParams } from "../api/get-motion-params";
import { MotionParams } from "../interfaces/motion-params";
import { startAnimation } from "./start-animation";

export const startCar = async (raceField: HTMLElement) => {
  const targetElement = raceField.querySelector(
    ".img-container"
  ) as HTMLElement;
  const idTargetElement = targetElement?.getAttribute("id");
  if (idTargetElement) {
    const motionParams: MotionParams = await getMotionParams(
      Number(idTargetElement),
      "started"
    );
    const time = motionParams.distance / motionParams.velocity;
    console.log(time);
    startAnimation(time, targetElement!);
  }
};
