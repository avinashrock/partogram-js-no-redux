export const fhrHoverData = new Map();
export const setFHRHoverData = (key, eventName, result, unit, shape, color, isResultModified) => {
  const index = new Date(key).toISOString();
  // eslint-disable-next-line no-unused-expressions
  if (!fhrHoverData[index]) {
    fhrHoverData[index] = [];
  }
  // Push to fhrHoverData for hover diaplay
  fhrHoverData[index].push({
    event: eventName,
    value: result,
    resultUnit: unit,
    shape,
    color,
    isResultModified,
  });
};
