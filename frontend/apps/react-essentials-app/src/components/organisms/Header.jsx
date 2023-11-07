import '@prj--reactjs-component-lib/generic-lsg/lib/organisms/header.css';
import '@prj--reactjs-component-lib/generic-lsg/lib/atoms/heading.css';
import '@prj--reactjs-component-lib/generic-lsg/lib/atoms/paragraph.css';
import { Heading, Paragraph } from '@prj--reactjs-component-lib/generic-lib';

const Header = ({ headingText, descriptionText, imgSrc, imgAlt }) => {
    return (
        <header className="header">
            {imgSrc && <img className="header__img" src={imgSrc} alt={imgAlt} />}
            <Heading className="header__heading" level={1} title={headingText} />
            {descriptionText && (
                <Paragraph className="header__text" size="xl">
                    {descriptionText}
                </Paragraph>
            )}
        </header>
    );
};

Header.defaultProps = {
    headingText: 'Heading Text - UNDEFINED',
    imgAlt: 'Image Alt - UNDEFINED',
};

export default Header;
