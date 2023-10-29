import Lottery from './components/Lottery';

const App = () => {
    return (
        <>
            <Lottery />
            <Lottery title="Mini Daily" maxNum={10} numBalls={4} />
        </>
    );
};

export default App;
