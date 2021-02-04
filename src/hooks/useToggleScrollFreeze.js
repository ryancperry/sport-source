import { useLayoutEffect } from 'react';

const useToggleScrollFreeze = isToggled => {
  useLayoutEffect(() => {
    if (isToggled) {
      document.body.style.overflow = 'hidden';
    }
    return (document.body.style.overflow = 'scroll');
  }, [isToggled]);
};

export default useToggleScrollFreeze;
