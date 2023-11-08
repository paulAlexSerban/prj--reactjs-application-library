import '@prj--reactjs-application-library/generic-lsg/lib/molecules/cardList.css';

const CardList = ({ children, className }) => {
    return <ul className={`cardList ${className}`}>{children}</ul>;
};

export default CardList;
