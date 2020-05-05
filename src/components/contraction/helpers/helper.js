
export const contractionHoverData = new Map();

export const setEpiduralHoverData = (data) => {
  const hoverData = data;
  hoverData.forEach((values) => {
    const contractionData = contractionHoverData[values.resultDateTime];
    if (contractionData === undefined) {
      contractionHoverData[values.resultDateTime] = [values];
    } else {
      contractionData.push(values);
    }
  });
};
