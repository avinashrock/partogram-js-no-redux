export const laborCurveHoverData = new Map();
export const setLaborCurveHoverData = (key, eventName, shape, color, data, unit, isResultModified) => {
  const index = new Date(key).toISOString();
  // eslint-disable-next-line no-unused-expressions
  if (!laborCurveHoverData[index]) {
    laborCurveHoverData[index] = [];
  }
  // Push to LaborCurveHoverData for hover diaplay
  laborCurveHoverData[index].push({
    event: eventName,
    value: data,
    resultUnit: unit,
    shape,
    color,
    isResultModified,
  });
};
