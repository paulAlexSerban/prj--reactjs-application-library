import './coin.scss';

const Coin = ({ info }) => {
    return (
        <>
            {info ? (
                <div className="coin">
                    <img src={info.imgSrc} alt={info.side} />
                </div>
            ) : (
                <div className="coin__placeholder">Click to Flip!</div>
            )}
        </>
    );
};

export default Coin;
