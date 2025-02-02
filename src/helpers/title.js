export const correctTitle = (title) => {
  const titleArray = title.split("");
  titleArray[0] = titleArray[0].toUpperCase();
  return titleArray.join("");
};
