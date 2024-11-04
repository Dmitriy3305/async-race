export async function stopAnimation(race: HTMLElement) {
   if (race.classList.contains('fire')) {
    race.classList.remove('fire');
   };
    race.style.transition = `transform 0ms linear`;
    race!.style.transform = "translateX(0px)";
  }
  