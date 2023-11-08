const logo =
    'https://s3.eu-central-1.amazonaws.com/assets.reactjs-component-lib.eu/images/investment-calculator-logo-original.webp';

import classes from './Header.module.scss';
import '@prj--reactjs-application-library/generic-lsg/lib/atoms/heading.css';
import { Heading } from '@prj--reactjs-application-library/generic-lib';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src={logo} alt="logo" />
            <Heading level={1} title="Investment Calculator" />
        </header>
    );
};

export default Header;
