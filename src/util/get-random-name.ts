import { carsName } from "../data/data";

export const getRandomName = () => {
  const randomBrandIndex = Math.floor(Math.random() * carsName.length);
  const randomModelIndex = Math.floor(Math.random() * carsName.length);
  const randomCarName = `${carsName[randomBrandIndex].brend} ${carsName[randomModelIndex].model}`;
  return randomCarName;
};
