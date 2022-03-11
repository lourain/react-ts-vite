import { useEffect, useState } from 'react';

export const isFalsy = (value: unknown): boolean => (value === 0 ? false : !value);

export const isVoid = (value: unknown) => value === undefined || value === null || value === '';

export const cleanObject = (obj: Record<string, unknown>): Record<string, unknown> => {
  const result = { ...obj };
  Object.keys(result).forEach(key => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounse = <T>(value: T, delay?: number): T => {
  const [debounse, setDebounse] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebounse(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounse;
};

export const useArray = <T>(array: T[]) => {
  const [arr, setArr] = useState(array);
  const add = (obj: T) => {
    setArr([...arr, obj]);
  };
  const removeIndex = (index: number) => {
    const copy = [...arr];
    copy.splice(index, 1);
    setArr([...copy]);
  };

  return { add, removeIndex, value: arr };
};
