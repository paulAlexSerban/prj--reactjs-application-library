import '@prj--reactjs-component-lib/generic-lsg/lib/atoms/paragraph.css';
import '@prj--reactjs-component-lib/generic-lsg/lib/atoms/heading.css';
import '@prj--reactjs-component-lib/generic-lsg/lib/molecules/card.css';

import { Heading, Paragraph } from '@prj--reactjs-component-lib/generic-lib';

const Card = ({ image, title, description, ...props }) => {
    return (
        <li className="card" {...props}>
            <img className="card__img" src={image} alt={title} />
            <Heading title={title} level={3} />
            <Paragraph size="lg">{description}</Paragraph>
        </li>
    );
};

Card.defaultProps = {
    image: 'https://s3.eu-central-1.amazonaws.com/assets.reactjs-component-lib.eu/images/components-original.webp',
    title: 'Title - UNDEFINED',
    description: 'Description - UNDEFINED',
};

export default Card;
