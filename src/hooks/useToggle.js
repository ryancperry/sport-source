import { useState } from 'react';

const useToggle = (initialState = false) => {
  const [isToggled, setIsToggled] = useState(initialState);
  const toggle = () => setIsToggled(prevState => !prevState);

  return { isToggled, setIsToggled, toggle };
};

export default useToggle;
