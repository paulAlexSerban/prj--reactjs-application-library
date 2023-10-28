import pokemon from '../../data/pokemon';
import Pokedex from '../molecules/Pokedex';

const Pokegame = () => {
    const hand1 = [];
    const hand2 = [...pokemon];
    while (hand1.length < hand2.length) {
        const randIdx = Math.floor(Math.random() * hand2.length);
        const randPokemon = hand2.splice(randIdx, 1)[0];
        hand1.push(randPokemon);
    }
    const exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    const exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    return (
        <>
            <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
            <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
        </>
    );
};

export default Pokegame;
