import { FaGlobe, FaStar } from 'react-icons/fa';
import React from 'react';

const Icon = ({
    iconName,
    wrapper = 'span',
    active,
    classNames = [],
    title,
    colors = { default: '#f2f2f2', active: '#ffcb45' },
    onAction = (cb) => cb,
    ...props
}) => {
    const classes = classNames.join(' ');

    const WrapperEl = wrapper;

    const icon = {
        star: <FaStar onClick={onAction} color={active ? colors.active : colors.default} {...props} />,
    };

    const selectedIcon = icon[iconName] || <FaGlobe title="Globe" />;

    return (
        <WrapperEl className={classes} {...props}>
            {selectedIcon}
        </WrapperEl>
    );
};

export default Icon;
