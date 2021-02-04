import { Footer, Navbar, Sidenav } from '../../components';
import { LayoutContextProvider } from '../../state';

const Layout = ({ children }) => (
  <LayoutContextProvider>
    <div className="layout">
      <Navbar />
      <Sidenav />
      {children}
      <Footer />
    </div>
  </LayoutContextProvider>
);

export default Layout;
