import './die.scss';

const Die = ({ face, rolling }) => {
    return <i className={`die fas fa-dice-${face} ${rolling && 'shaking'}`} />;
};

export default Die;
