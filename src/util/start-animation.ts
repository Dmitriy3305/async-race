export async function startAnimation(time: number, race: HTMLElement) {
  race.style.transition = `transform ${time}ms linear`;
  const raceField = race.parentNode?.parentNode;
  const finish = raceField!.querySelector(".finish-img");
  const raceX = race.getBoundingClientRect();
  const finishX = finish!.getBoundingClientRect();
  const distance = Math.abs(finishX.right - raceX.left);
  race!.style.transform = `translateX(${distance}px)`;
}
