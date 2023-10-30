import Box from './Box';
import './boxContainer.scss';

const BoxContainer = ({ numBoxes, allColors }) => {
    const boxes = Array.from({ length: numBoxes }).map((item, index) => <Box key={index} colors={allColors} />);
    return <div className="boxContainer">{boxes}</div>;
};

BoxContainer.defaultProps = {
    numBoxes: 18,
    allColors: [
        'purple',
        'magenta',
        'violet',
        'pink',
        'red',
        'blue',
        'green',
        'yellow',
        'orange',
        'brown',
        'black',
        'white',
        'gray',
        'lightgray',
        'darkgray',
        'cyan',
        'lightblue',
        'lightgreen',
        'lightyellow',
        'lightcyan',
        'lightpink',
        'lightpurple',
        'lightmagenta',
        'lightbrown',
    ],
};

export default BoxContainer;
