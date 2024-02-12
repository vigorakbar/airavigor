export const generateThresholdStep = (step: number) => {
  const threshold = [];
  for (let i = step; i >= 0; i--) {
    threshold.push(i / step);
  }
};
