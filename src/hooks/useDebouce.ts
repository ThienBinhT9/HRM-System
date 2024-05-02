import { useState, useEffect } from "react";

const useDebouce = (value: any, delay: number) => {
  const [valueDebouce, setValueDebouce] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setValueDebouce(value);
    }, delay);

    return () => clearTimeout(timerId);
  }, [value, delay]);

  return valueDebouce;
};

export default useDebouce;
