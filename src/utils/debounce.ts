/* eslint-disable */
export const debounce = (callback: (...args: any[]) => void, wait: number) => {
  // @ts-expect-error
  let timeoutId = null;
  // @ts-expect-error
  return (...args) => {
    // @ts-expect-error
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, wait);
  };
};
