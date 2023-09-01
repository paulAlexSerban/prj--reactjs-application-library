import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.scss';

const MainHeader = () => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation />
    </header>
  );
};

export default MainHeader;
