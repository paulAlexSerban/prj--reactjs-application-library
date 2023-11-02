import Paragraph from '../atoms/Paragraph';
import Heading from '../atoms/Heading';
import '@prj--reactjs-component-lib/generic-lsg/lib/molecules/card.css';

const Card = ({ image, title, description, ...props }) => {
    return (
        <li className="card" {...props}>
            <img className="card__img" src={image} alt={title} />
            <Heading title={title} level={3} />
            <Paragraph>{description}</Paragraph>
        </li>
    );
};

Card.defaultProps = {
    image: 'https://s3.eu-central-1.amazonaws.com/assets.reactjs-component-lib.eu/images/components-original.webp',
    title: 'Title - UNDEFINED',
    description: 'Description - UNDEFINED',
};

export default Card;
