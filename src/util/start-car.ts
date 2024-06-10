import { getMotionParams } from "../api/get-motion-params";
import { MotionParams } from "../interfaces/motion-params";
import { startAnimation } from "./start-animation";
import { switchEngineToDrive } from "../api/switch-engine-to-drive";
import { getCrash } from "./get-crash";

export const startCar = async (raceField: HTMLElement) => {
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
    startAnimation(time, targetElement!);
    const response = await switchEngineToDrive(idTargetElement);
    if (response!.success === false) {
      getCrash(targetElement!);
    }
  }
};
