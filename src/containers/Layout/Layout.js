import { Footer, Navbar } from '../../components';
import { LayoutContextProvider } from '../../state';

const Layout = ({ children }) => (
  <LayoutContextProvider>
    <div className="layout">
      <Navbar />
      {children}
      <Footer />
    </div>
  </LayoutContextProvider>
);

export default Layout;
