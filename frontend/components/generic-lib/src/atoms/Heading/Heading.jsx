import React from 'react';

const Heading = ({ title, subtitle, level, align = 'center', className = '', ...props }) => {
    const HeadingTag = `h${level}`;
    const classes = [className, 'heading'];
    className && classes.push(className);
    level && classes.push(`heading--${level}`);
    align && classes.push(`heading--align-${align}`);
    return (
        <HeadingTag className={classes.join(' ')} {...props}>
            {title}
            {subtitle && <span>{subtitle}</span>}
        </HeadingTag>
    );
};

Heading.defaultProps = {
    level: 2,
};

export default Heading;
