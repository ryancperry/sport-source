/* eslint-disable vars-on-top */
/* eslint-disable no-var */
import Head from 'next/head';
import { Banner, Banner2, DetailsExample } from '../src/components';
import DownloadButton from '../src/components/DownloadButton/DownloadButton';
import Features from '../src/containers/Features/Features';

const Home = () => {
  return (
    <>
      <Head>
        <title>Sport Source | Home Page</title>
        <meta
          name="description"
          content="The Sport Source app connects athletes looking to book spaces to active space owners with diverse spaces to rent. Real time scheduling means more time playing. Search and book gyms, fields, courts and pools by the hour from your phone."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="home__main">
        <Banner />
        <Banner2 />
        <Features />
        <section className="home__section">
          <header>
            <h2 className="home__section-headline">Frequently asked questions</h2>
          </header>
          <div className="home__details-wrapper">
            <DetailsExample />
            <DetailsExample />
            <DetailsExample />
            <DetailsExample />
            <DetailsExample />
          </div>
        </section>
        <div className="download-button__sticky-parent">
          <DownloadButton />
        </div>
      </main>
    </>
  );
};

export default Home;
