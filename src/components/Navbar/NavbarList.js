import { useRouter } from 'next/router';
import Link from '../Link/Link';

const NavbarList = () => {
  const { pathname = '' } = useRouter();

  const navLinks = [
    {
      href: '/',
      text: 'Home'
    },
    {
      href: '/about',
      text: 'About'
    },
    {
      href: '/ui/forms',
      text: 'Forms'
    },
    {
      href: '/dates',
      text: 'Dates'
    }
  ];

  return (
    <ul className="navbar__nav-list">
      {navLinks.map(({ href, text }) => {
        const active = href === pathname;
        const className = `navbar__nav-item${active ? ' active' : ''}`;
        const key = `navbar-${text.toLowerCase()}-link`;

        return (
          <li className={className} key={key}>
            <Link className="" href={href} id={key} text={text} />
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarList;
