export function stopAnimation(race: HTMLElement) {
  const computedStyle = window.getComputedStyle(race);
  const matrix = new WebKitCSSMatrix(computedStyle.transform);
  const currentX = matrix.m41;
  race.style.transition = "none";
  race.style.transform = `translateX(${currentX}px)`;
  race.classList.add("fire");
}
