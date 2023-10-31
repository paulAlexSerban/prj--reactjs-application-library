import './hangman.scss';
import { useCallback, useReducer } from 'react';
import randomWord from '@prj--reactjs-component-lib/shared-utils-js/src/foundation/words';
import { ALPHABET_LOWERCASE } from '@prj--reactjs-component-lib/shared-utils-js/src/foundation/alphabet';

const img0 = 'https://s3.eu-central-1.amazonaws.com/assets.reactjs-component-lib.eu/images/hangman-0-original.webp';
const img1 = 'https://s3.eu-central-1.amazonaws.com/assets.reactjs-component-lib.eu/images/hangman-1-original.webp';
const img2 = 'https://s3.eu-central-1.amazonaws.com/assets.reactjs-component-lib.eu/images/hangman-2-original.webp';
const img3 = 'https://s3.eu-central-1.amazonaws.com/assets.reactjs-component-lib.eu/images/hangman-3-original.webp';
const img4 = 'https://s3.eu-central-1.amazonaws.com/assets.reactjs-component-lib.eu/images/hangman-4-original.webp';
const img5 = 'https://s3.eu-central-1.amazonaws.com/assets.reactjs-component-lib.eu/images/hangman-5-original.webp';
const img6 = 'https://s3.eu-central-1.amazonaws.com/assets.reactjs-component-lib.eu/images/hangman-6-original.webp';

const initialState = {
    nWrong: 0,
    guessed: new Set(),
    answer: randomWord(),
    gameState: '',
};

const reducer = (state, action) => {
    console.log('reducer', state, action);
    switch (action.type) {
        case 'GUESS':
            const newGuessed = new Set([...state.guessed, action.letter]);
            const nWrong = state.answer.includes(action.letter) ? state.nWrong : state.nWrong + 1;
            const gameState = getGameState(nWrong, action.maxWrong, state.answer, newGuessed);
            return { ...state, guessed: newGuessed, nWrong, gameState };

        case 'RESET':
            return initialState;

        default:
            return state;
    }
};

const getGameState = (nWrong, maxWrong, answer, guessed) => {
    if (nWrong >= maxWrong) return 'You Lose!';
    if (answer.split('').every((ltr) => guessed.has(ltr))) return 'You Win!';
    return '';
};

const Hangman = ({ images, maxWrong }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const alphabetArray = ALPHABET_LOWERCASE.split('');

    const reset = () => {
        dispatch({ type: 'RESET' });
    };

    /**
     * guessedWord: show current-state of word:
     * if guessed letters are {a,p,e}, show "app_e" for "apple"
     *
     * use function declaration instead of const with arrow function to avoid
     * unexpected behavior with and return value
     */
    const guessedWord = useCallback(() => {
        return state.answer.split('').map((ltr) => (state.guessed.has(ltr) ? ltr : '_'));
    });

    /**
     * handleGuest: handle a guessed letter:
     * add to guessed letters
     * if not in answer, increase number-wrong guesses
     */

    const handleGuess = useCallback(
        (evt) => {
            dispatch({ type: 'GUESS', letter: evt.target.value, maxWrong });
        },
        [maxWrong]
    );

    const altText = `${state.nWrong}/${maxWrong} guesses`;

    return (
        <div className="hangman">
            <h1>Hangman</h1>
            <img src={images[state.nWrong]} alt={altText} />
            <p className="hangman__wrong-guesses">Guessed Wrong: {state.nWrong}</p>
            <p className="hangman__word">{guessedWord()}</p>
            {state.gameState && <p className="hangman__game-state">{state.gameState}</p>}
            {!state.gameState && (
                <div className="hangman__btns">
                    {alphabetArray.map((ltr) => (
                        <button key={ltr} value={ltr} onClick={handleGuess} disabled={state.guessed.has(ltr)}>
                            {ltr}
                        </button>
                    ))}
                </div>
            )}
            <button className="hangman__reset" onClick={reset}>
                Reset
            </button>
        </div>
    );
};

Hangman.defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
};

export default Hangman;
