export const changeMainComponent = (
  componentToRemove: HTMLElement,
  componentToAdd: HTMLElement
) => {
  componentToRemove.remove();
  document.body.append(componentToAdd);
};
