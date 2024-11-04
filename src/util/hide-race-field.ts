export const hideRacefield = () => {
  const gameSpace = document.querySelector(".game-space");
  const totalRaceField = +gameSpace?.childNodes.length!;
  if (totalRaceField > 5) {
    for (let i = 6; i < totalRaceField; i++) {
      (gameSpace?.childNodes[i] as HTMLElement).style.display = "none";
    }
  }
};
