import React from 'react';
import './pokecard.scss';
import padToThree from '@prj--reactjs-component-lib/shared-utils-js/src/numbers/padToThree';

// 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png'
// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
// 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png' -  this is the new api - it needs id to have 3 digits
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

const Pokecard = ({ id, name, type, exp }) => {
    const imgSrc = `${POKE_API}${padToThree(id)}.png`;
    return (
        <div className="pokecard" id={id}>
            <h2 className="pokecard__title">{name}</h2>
            <div className="pokecard__image">
                <img src={imgSrc} alt={name} />
            </div>

            <p className="pokecard__data">Type: {type}</p>
            <p className="pokecard__data">EXP: {exp}</p>
        </div>
    );
};

export default Pokecard;
