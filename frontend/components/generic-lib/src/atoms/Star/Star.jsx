import { FaStar } from 'react-icons/fa';
import React from 'react';

const Star = ({ selected, onSelect = (cb) => cb }) => {
    return <FaStar className="star" color={selected ? '#ffcb45' : '#f2f2f2'} onClick={onSelect} />;
};

export default Star;
