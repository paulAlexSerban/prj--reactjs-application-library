import React from 'react';

const Color = ({ hexCode, width, height }) => {
    const className = `width-${width} height-${height}`;

    return (
        <div
            data-testid="Color"
            className={className}
            style={{
                backgroundColor: hexCode,
            }}
        ></div>
    );
};

export default Color;
