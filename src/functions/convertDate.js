export const convertDate = (time) => {
  const date = new Date(time);

  return date.getDate() + "/" + (date.getMonth() + 1);
};
