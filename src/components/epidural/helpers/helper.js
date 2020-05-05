
export const epiduralHoverData = new Map();

export const setEpiduralHoverData = (key, eventName, shape, color) => {
  const index = new Date(key).toISOString();
  if (epiduralHoverData[index] === undefined) {
    epiduralHoverData[index] = [];
  }
  // Push to hoverDataMap to display multiple values
  epiduralHoverData[index].push(
    {
      event: eventName,
      value: index,
      shape,
      color,
    },
  );
};
