import { useHover } from '../../hooks';

const HoverExample = () => {
  const [isHovered, bind] = useHover();

  return (
    <div {...bind} className="hover-example__container">
      <h2 className="hover-example__headline">Hover example</h2>
      <p>Is {isHovered ? '' : 'not '}hovered</p>
    </div>
  );
};

export default HoverExample;
