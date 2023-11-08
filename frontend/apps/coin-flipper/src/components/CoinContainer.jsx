import { useState } from 'react';
import choice from '@prj--reactjs-component-lib/shared-utils-js/src/arrays/choice';
import Coin from './Coin';

import '@prj--reactjs-component-lib/generic-lsg/lib/atoms/button.css';
import { Button } from '@prj--reactjs-component-lib/generic-lib';

import './coinContainer.scss';
const CoinContainer = ({ coins }) => {
    const [currCoin, setCurrCoin] = useState(null);
    const [nFlips, setNFlips] = useState(0);
    const [nHeads, setNHeads] = useState(0);
    const [nTails, setNTails] = useState(0);

    const flipCoin = () => {
        const newCoin = choice(coins);
        setCurrCoin(newCoin);
        setNFlips(nFlips + 1);
        setNHeads(nHeads + (newCoin.side === 'heads' ? 1 : 0));
        setNTails(nTails + (newCoin.side === 'tails' ? 1 : 0));
    };

    const handleClick = () => {
        flipCoin();
    };

    return (
        <div className="coinContainer">
            <h2>Let's Flip A Coin!</h2>
            <Coin info={currCoin} />
            <Button label="Flip Me!" onClick={handleClick} radius="rounded" size="large" />
            <p>
                Out of {nFlips} flips, there have been {nHeads} heads and {nTails} tails.
            </p>
        </div>
    );
};

CoinContainer.defaultProps = {
    coins: [
        { side: 'heads', imgSrc: 'https://en.numista.com/catalogue/photos/etats-unis/1590-original.jpg' },
        { side: 'tails', imgSrc: 'https://en.numista.com/catalogue/photos/etats-unis/1591-original.jpg' },
    ],
};

export default CoinContainer;
