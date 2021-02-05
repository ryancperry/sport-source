import Image from 'next/image';

const Features = () => {
  const featuresList = [
    {
      headline: 'Reservations made simple',
      copy: [
        'The Sport Source app connects athletes looking to book spaces to active space owners with diverse spaces to rent. Real time scheduling means more time playing.'
      ],
      image: '/images/screen-1.png'
    },
    {
      headline: 'Discover a new way to get where you belong.',
      copy: [
        'Choose the best space for your next workout, practice, game or event.',
        'Browse diverse space options by location, photos, price and availability.'
      ],
      image: '/images/screen-2.png'
    },
    {
      headline: 'Stop wasting potential looking for places to play.',
      copy: [
        'Save time and headache through our quick, simple, scheduling system.',
        'Claim your space and pay instantly.'
      ],
      image: '/images/screen-3.png'
    },
    {
      headline: 'Bookings. Simplified.',
      copy: [
        'Connect with your host from your phone through our app. Show up and do what you love. '
      ],
      image: '/images/screen-4.png'
    },
    {
      headline: 'Become a Sport Source host.',
      copy: [
        'List your space and start earning Instantly. You decide when, where and how to host.',
        'Set your own rules, price, and schedule for your space.'
      ],
      image: '/images/screen-5.png'
    },
    {
      headline: 'Enjoy new revenue streams.',
      copy: [
        'Conveniently manage your bookings calendar through the app. Expand your business with access to new customers.',
        'Watch your downtime convert to dollars.'
      ],
      image: '/images/screen-6.jpg'
    }
  ];
  return (
    <ul className="features__list">
      {featuresList.map((feature, featureIndex) => {
        const { copy, headline, image } = feature;
        const key = `features-item-${featureIndex + 1}`;

        return (
          <li className="features__item" key={key}>
            <Image
              alt="Sport Source phone app"
              className="features__image"
              height={549}
              layout="fill"
              src={image}
              width={272}
            />
            <div className="features__text">
              <h3 className="features__headline">{headline}</h3>
              {copy.map((line, lineIndex) => {
                const lineKey = `line-item-${lineIndex + 1}`;

                return (
                  <p className="features__line" key={lineKey}>
                    {line}
                  </p>
                );
              })}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Features;
