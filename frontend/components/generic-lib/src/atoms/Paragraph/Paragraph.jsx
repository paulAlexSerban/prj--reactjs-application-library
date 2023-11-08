import React from 'react';

const Paragraph = ({ size = 'base', className, children }) => {
    const classes = [className, 'paragraph'];
    className && classes.push(className);
    size && classes.push(`paragraph--${size}`);
    return <p className={classes.join(' ')}>{children}</p>;
};

export default Paragraph;
