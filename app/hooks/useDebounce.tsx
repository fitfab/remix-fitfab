import { useEffect, useState } from "react";

// @see https://medium.com/@TCAS3/debounce-deep-dive-javascript-es6-e6f8d983b7a1
export const debounce = (fn: (...args: any[]) => void, time: number) => {
  let timeout: any;
  return () => {
    const functionCall = function (this: any, ...args: any[]) {
      fn.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};

export default function useDebounce(value: any, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const pauseId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(pauseId);
    };
  }, [value, delay]);

  return debouncedValue;
}
