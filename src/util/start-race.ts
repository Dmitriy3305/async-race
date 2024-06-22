import { switchEngineToDrive } from "../api/switch-engine-to-drive";
import { animateCar } from "./animate-car";
import { getCrash } from "./get-crash";
import { getWinner } from "./get-winner";
import { prepareCar } from "./prepare-car";
import { startCar } from "./start-car";

export const startRace = async () => {
  const raceFields = document.querySelectorAll(".race-field");
  const raceFieldsArray = Array.from(raceFields).filter((raceField) => {
    const computedStyle = getComputedStyle(raceField as HTMLElement);
    return computedStyle.display === "flex";
  });

  const preparedCars = (
    await Promise.all(
      raceFieldsArray.map((raceField) => prepareCar(raceField as HTMLElement))
    )
  ).filter((car) => car !== null);

  const results = await Promise.all(
    preparedCars.map(async (car) => {
      const { time, targetElement } = car!;
      animateCar(time, targetElement);
      const idTargetElement = +targetElement.getAttribute("id")!;
      const response = await switchEngineToDrive(idTargetElement);
      if (response!.success === false) {
        getCrash(targetElement!);
      }
      startCar(targetElement as HTMLElement);
      return car;
    })
  );
  const winner = getWinner(results);
  console.log(winner);
};
