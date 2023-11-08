import React from 'react';

/**
 * Primary UI component for user interaction
 */
const Button = ({ primary = true, size = 'medium', backgroundColor, radius = 'squared', label, ...props }) => {
    const mode = primary ? 'button--primary' : 'button--secondary';
    return (
        <button
            type="button"
            className={['button', `button--${size}`, `button--${radius}`, mode].join(' ')}
            style={{ backgroundColor }}
            {...props}
        >
            {label}
        </button>
    );
};

export default Button;
