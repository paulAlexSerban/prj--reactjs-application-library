import '@prj--reactjs-application-library/generic-lsg/lib/atoms/tabButton.css';

const TabButton = ({ children, isSelected, ...props }) => {
    return (
        <li className="tabButton">
            <button {...props} className={`tabButton__btn ${isSelected && 'active'}`}>
                {children}
            </button>
        </li>
    );
};

export default TabButton;
