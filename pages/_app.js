import Layout from '../src/containers/Layout/Layout';
import '../src/styles/styles.scss';

const App = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
