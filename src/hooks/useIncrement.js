import { useState } from 'react';

const useIncrement = ({ initialValue = 0, maxValue = 10, minValue = -5 }) => {
  const [value, setValue] = useState(initialValue);
  const increment = () => setValue(prevState => (prevState >= maxValue ? maxValue : prevState + 1));
  const decrement = () => setValue(prevState => (prevState <= minValue ? minValue : prevState - 1));
  const reset = () => setValue(initialValue);

  return [value, { decrement, increment, reset }];
};

export default useIncrement;
