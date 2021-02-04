import Link from 'next/link';
import { useRef } from 'react';
import { useClickOutside, useScrollFreeze } from '../../hooks';
import { useLayoutContext } from '../../state';
import { Close } from '../Icons';

const Sidenav = () => {
  const { closeSidenav, isSidenavToggled } = useLayoutContext();
  const ref = useRef();
  useClickOutside(ref, closeSidenav, isSidenavToggled);

  useScrollFreeze(isSidenavToggled);

  return (
    <nav
      aria-label={`${isSidenavToggled ? 'Close' : 'Open'} sidenav`}
      className={`sidenav ${isSidenavToggled ? 'opened' : 'closed'}`}
      ref={ref}
    >
      <button className="sidenav__toggle" onClick={closeSidenav} type="button">
        <Close />
      </button>
      <p>Sidenav</p>
      <ul className="sidenav__list">
        <li className="sidenav__item">
          <Link href="/">
            <a className="sidenav__link">Home</a>
          </Link>
        </li>
        <li className="sidenav__item">
          <Link href="/about">
            <a className="sidenav__link">About</a>
          </Link>
        </li>
        <li className="sidenav__item">
          <Link href="/rick-and-morty">
            <a className="sidenav__link">Rick and Morty</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
