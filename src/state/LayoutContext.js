import { createContext, useContext } from 'react';
import { useRouteChange, useToggle } from '../hooks';

const LayoutContext = createContext([{}, () => {}]);

export const LayoutContextProvider = ({ children }) => {
  const {
    isToggled: isSidenavToggled,
    setIsToggled: setIsSidenavToggled,
    toggle: toggleSidenav
  } = useToggle();

  const closeSidenav = () => setIsSidenavToggled(false);

  useRouteChange(() => closeSidenav());

  return (
    <LayoutContext.Provider value={{ closeSidenav, isSidenavToggled, toggleSidenav }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => useContext(LayoutContext);
