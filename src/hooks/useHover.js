import { useMemo, useState } from 'react';

const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  const bind = useMemo(() => {
    return {
      onMouseOver: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false)
    };
  }, []);
  return [isHovered, bind];
};

export default useHover;
