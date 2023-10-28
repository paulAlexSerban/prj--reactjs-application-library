import pokemon from '../../data/pokemon';
import Pokecard from './Pokecard';

import './pokedex.scss';

const Pokedex = ({ pokemon, exp, isWinner }) => {
    let title;
    if (isWinner) {
        title = <h1 className="pokedex__winner">Winning Hand</h1>;
    } else if (isWinner === false) {
        title = <h1 className="pokedex__looser">Losing Hand</h1>;
    }
    return (
        <>
            <div className="pokedex">
                {title && title}
                {exp && <h4>Total Experience: {exp}</h4>}
                <div className="pokedex__cards">
                    {pokemon.map((p) => (
                        <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            </div>
        </>
    );
};

Pokedex.defaultProps = {
    pokemon,
};

export default Pokedex;
