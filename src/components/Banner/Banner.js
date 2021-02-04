import Image from 'next/image';
import { useEffect, useState } from 'react';

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const itemList = [
    {
      image: '/images/court.jpg',
      text: 'a court'
    },
    {
      image: '/images/field.jpg',
      text: 'a field'
    },
    {
      image: '/images/pool.jpeg',
      text: 'a pool'
    },
    {
      image: '/images/gym.jpg',
      text: 'a gym'
    },
    {
      image: '/images/studio.jpg',
      text: 'a studio'
    },
    {
      image: '/images/phones-circle.jpg',
      text: 'an active space'
    }
  ];

  useEffect(() => {
    const lastItemIndex = 5;
    const interval = setInterval(() => {
      setActiveIndex(() => (activeIndex < lastItemIndex ? activeIndex + 1 : 0));
    }, 7000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <header className="banner__header">
      <h1 className="banner__headline">
        For every athlete,
        <br /> there&rsquo;s
        <span className="headline__rotating-word"> {itemList[activeIndex].text}.</span>
      </h1>
      <ul className="banner__image-list">
        {itemList.map(({ image = '', text = '' }, index) => {
          const key = `banner-image-${index + 1}`;
          const active = index === activeIndex;

          return (
            <li className="banner__image-item" key={key}>
              <Image
                alt={text}
                className={`banner__image${active ? ' active' : ''}`}
                layout="fill"
                objectFit="cover"
                src={image}
                priority
                unsized
              />
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Banner;
