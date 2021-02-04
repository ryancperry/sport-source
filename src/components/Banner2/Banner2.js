import Image from 'next/image';
import DownloadButton from '../DownloadButton/DownloadButton';

const Banner2 = () => {
  return (
    <section className="banner-2__section">
      <Image
        alt="Sport Source phone app"
        className="banner-2__image"
        height={705}
        src="/images/banner-phones.png"
        width={600}
      />
      <header className="banner-2__header">
        <h2 className="banner-2__headline">rethink the game</h2>
        <p className="banner-2__subhead">
          Access thousands of active spaces that fit your busy lifestyle. When you need it, where
          you want it.
        </p>
      </header>
      <p className="banner-2__text">Search. Book. Get Moving.</p>
      <DownloadButton />
    </section>
  );
};

export default Banner2;
