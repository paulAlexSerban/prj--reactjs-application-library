import '@prj--reactjs-application-library/generic-lsg/lib/organisms/tabs.css';

const Tabs = ({ children, buttons, ButtonsContainer = 'menu' }) => {
    return (
        <div className="tabs">
            <ButtonsContainer className="tabs__buttons">{buttons}</ButtonsContainer>
            <div className="tabs__panel">{children}</div>
        </div>
    );
};

export default Tabs;
