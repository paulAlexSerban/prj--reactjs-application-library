import choice from '@prj--reactjs-component-lib/shared-utils-js/src/arrays/choice';
import { useState, useEffect } from 'react';
import './box.scss';
const Box = ({ colors }) => {
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

    return <div className="box" style={{ backgroundColor: color }} onClick={handleClick} />;
};

export default Box;