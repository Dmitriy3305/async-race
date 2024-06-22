export const getWinner = (
  results: ({ time: number; targetElement: HTMLElement } | null)[]
) => {
  const filteredResults = results.filter(
    (car) => !(car!.targetElement as HTMLElement).classList.contains("fire")
  );
  const winner = filteredResults!.reduce((currentCar, nextCar) => {
    return nextCar!.time < currentCar!.time ? nextCar : currentCar;
  });
  return winner;
};
