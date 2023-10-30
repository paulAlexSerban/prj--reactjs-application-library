import React from 'react';

const ConceptHeader = ({ imgSrc }) => {
    return (
        <header className="header">
            <img src={imgSrc} alt="Medal badge with a star" />
            <h1>Key React Concepts</h1>
            <p>Selected key React concepts you should know about</p>
        </header>
    );
};

export default ConceptHeader;
