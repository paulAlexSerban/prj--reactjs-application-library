import { useState } from 'react';
import Ball from './Ball';
import './lottery.scss';

const Lottery = ({ title, maxNum, numBalls }) => {
    const [nums, setNums] = useState(Array.from({ length: numBalls }));

    const generate = () => {
        setNums(nums.map((n) => Math.floor(Math.random() * maxNum) + 1));
    };
    const handleClick = () => {
        generate();
    };

    return (
        <>
            <section className="lottery">
                <h1>{title}</h1>
                <div>
                    {nums.map((n, index) => (
                        <Ball key={index} num={n} />
                    ))}
                </div>
                <button onClick={handleClick}>Generate</button>
            </section>
        </>
    );
};

Lottery.defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 49,
};

export default Lottery;
