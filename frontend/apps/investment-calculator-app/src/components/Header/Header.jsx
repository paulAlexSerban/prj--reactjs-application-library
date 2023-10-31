const logo =
    'https://s3.eu-central-1.amazonaws.com/assets.reactjs-component-lib.eu/images/investment-calculator-logo-original.webp';

import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src={logo} alt="logo" />
            <h1>Investment Calculator</h1>
        </header>
    );
};

export default Header;
