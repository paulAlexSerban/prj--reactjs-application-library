import Pokedex from './components/molecules/Pokedex';
import pokemon from './data/pokemon';
import Pokegame from './components/organisms/Pokegame';

// pick 8 random pokemon from the list

const App = () => {
    const pokemonListPick = (pokemon, limit) => {
        const list = [];
        for (let i = 0; i < limit; i++) {
            const randIdx = Math.floor(Math.random() * pokemon.length);
            const randPokemon = pokemon.splice(randIdx, 1)[0];
            list.push(randPokemon);
        }
        return list;
    };

    const pokemonList = pokemonListPick(pokemon, 8);
    return (
        <>
            <Pokegame pokemonList={pokemonList} />
            <hr />
            <Pokedex pokemonList={pokemon} />
        </>
    );
};

export default App;
