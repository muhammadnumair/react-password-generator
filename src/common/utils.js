// Method returns multiple random values from array
export const getMultipleRandoms = (dataArr, limit) => {
  // Sort the array randomly
  const randomArr = dataArr.sort(() => 0.5 - Math.random());

  return randomArr.slice(0, limit);
};
