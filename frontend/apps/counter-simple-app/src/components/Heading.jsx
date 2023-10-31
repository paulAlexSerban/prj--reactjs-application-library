import React from 'react';

const Heading = ({ name }) => {
    return (
        <header>
            <h1>Hello {name === 'React' ? <i>React</i> : name} !!</h1>
        </header>
    );
};

export default Heading;
