import { useEffect } from 'react';

const useScrollFreeze = condition => {
  useEffect(() => {
    const { style } = document.body;

    if (condition) {
      style.overflow = 'hidden';
    } else {
      style.removeProperty('overflow');
    }

    return () => style.removeProperty('overflow');
  }, [condition]);
};

export default useScrollFreeze;
