export const updatePageDisplay = (
  raceFields: NodeListOf<Element>,
  currentPage: number,
  itemsPerPage: number
) => {
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, raceFields.length);

  raceFields.forEach(
    (raceField) => ((raceField as HTMLElement).style.display = "none")
  );

  for (let i = startIndex; i < endIndex; i++) {
    (raceFields[i] as HTMLElement).style.display = "flex";
  }
};
