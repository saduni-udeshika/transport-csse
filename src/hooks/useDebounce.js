import { useEffect, useRef, useState } from "react";

export const useDebounce = (initialValue, debounceTimer) => {
  const [value, setValue] = useState(initialValue);
  const timerRef = useRef(null);

  const updateValue = (val) => {
    if (timerRef.current != null) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setValue(val);
      timerRef.current = null;
    }, debounceTimer);
  };

  return [value, updateValue];
};
