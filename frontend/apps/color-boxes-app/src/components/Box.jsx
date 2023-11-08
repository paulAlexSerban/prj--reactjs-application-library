import choice from '@prj--reactjs-application-library/shared-utils-js/src/arrays/choice';
import { useState, useEffect } from 'react';
import './box.scss';
const Box = ({ colors, ...props }) => {
    const [color, setColor] = useState('purple');

    const pickColor = () => {
        let newColor;
        do {
            newColor = choice(colors);
        } while (newColor === color);

        setColor(newColor);
    };

    const handleClick = () => {
        pickColor();
    };

    useEffect(() => {
        pickColor();
    }, []);

    return <div className="box" style={{ backgroundColor: color }} onClick={handleClick} {...props} />;
};

export default Box;
