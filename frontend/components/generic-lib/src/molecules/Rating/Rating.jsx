import Icon from '../../atoms/Icon';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Rating = ({ number = 5 }) => {
    const [selected, setSelected] = useState(0);

    const handleSelect = (e, index) => {
        e.preventDefault();
        setSelected(index + 1);
    };

    return [...Array(number)].map((_, index) => (
        <Icon
            iconName="star"
            classNames={['star']}
            key={index}
            onAction={e => handleSelect(e, index)}
            active={index < selected}
        />
    ));
};

Rating.propTypes = {
    number: PropTypes.number,
};

export default Rating;
