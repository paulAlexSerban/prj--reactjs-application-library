import React from 'react';

const Paragraph = ({ size, children }) => {
    const className = `paragraph paragraph-${size}`;
    return <p className={className}>{children}</p>;
};

export default Paragraph;
