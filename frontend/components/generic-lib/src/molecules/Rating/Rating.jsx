import Star from '../../atoms/Star';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Rating = ({ number = 5 }) => {
    const [selected, setSelected] = useState(0);

    return [...Array(number)].map((_, index) => (
        <Star key={index} onSelect={() => setSelected(index + 1)} selected={index < selected} />
    ));
};

Rating.propTypes = {
    number: PropTypes.number,
};

export default Rating;
