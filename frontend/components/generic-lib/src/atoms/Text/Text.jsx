import React from 'react';

const Text = ({ size, children }) => {
    const className = `text text-${size}`;
    return <p className={className}>{children}</p>;
};

export default Text;
