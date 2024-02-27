export const calculateMean = (values) => {
  const sum = values.reduce((acc, val) => acc + val, 0);
  return sum / values.length || 0;
};

export const calculateMedian = (values) => {
  const sortedValues = values.sort((a, b) => a - b);
  const middle = Math.floor(sortedValues.length / 2);
  return sortedValues.length % 2 === 0
    ? (sortedValues[middle - 1] + sortedValues[middle]) / 2
    : sortedValues[middle];
};

export const calculateMode = (values) => {
  const frequencyMap = values.reduce((map, val) => {
    const key = val.toFixed(3);
    map[key] = (map[key] || 0) + 1;
    return map;
  }, {});

  const maxFrequency = Math.max(...Object.values(frequencyMap));
  const modeKeys = Object.keys(frequencyMap).filter(
    (key) => frequencyMap[key] === maxFrequency
  );

  const modeValues = modeKeys.map((key) => parseFloat(key));

  return modeValues.map((value) => value.toFixed(3));
};

export const calculateGamma = (data) => {
  return data.map((item) => ({
    ...item,
    Gamma:
      (parseFloat(item.Ash) * parseFloat(item.Hue)) /
      parseFloat(item.Magnesium),
  }));
};
