import '@prj--reactjs-component-lib/generic-lsg/lib/molecules/rea-card.css';

const Card = ({ image, title, description, ...props }) => {
    return (
        <li className="rea-card" {...props}>
            <img className="rea-card__img" src={image} alt={title} />
            <h3 className="rea-card__title">{title}</h3>
            <p className="rea-card__description">{description}</p>
        </li>
    );
};

Card.defaultProps = {
    image: 'https://s3.eu-central-1.amazonaws.com/assets.reactjs-component-lib.eu/images/components-original.webp',
    title: 'Title - UNDEFINED',
    description: 'Description - UNDEFINED',
};

export default Card;
