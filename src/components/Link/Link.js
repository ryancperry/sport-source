import NextLink from 'next/link';

const Link = ({ className = '', href = '/', id = '', image, imageAlt = '', text = '' }) => (
  <NextLink href={href}>
    <a className={className} id={id}>
      {image ? <img alt={imageAlt} className={`${className}-image`} src={image} /> : text}
    </a>
  </NextLink>
);

export default Link;
