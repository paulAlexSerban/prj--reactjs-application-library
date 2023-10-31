import '@prj--reactjs-component-lib/generic-lsg/lib/organisms/rea-header.css';

const Header = ({ headingText, descriptionText, imgSrc, imgAlt }) => {
    return (
        <header className="rea-header">
            {imgSrc && <img className="rea-header__img" src={imgSrc} alt={imgAlt} />}
            <h1 className="rea-header__heading">{headingText}</h1>
            {descriptionText && <p className="rea-header__text">{descriptionText}</p>}
        </header>
    );
};

Header.defaultProps = {
    headingText: 'Heading Text - UNDEFINED',
    imgAlt: 'Image Alt - UNDEFINED',
};

export default Header;
