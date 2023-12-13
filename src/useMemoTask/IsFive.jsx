
import PropTypes from 'prop-types';

let renderCount = 0;

const sleep = delay => {
    const date = Date.now();
    let currentDate = null;

    do {
        currentDate = Date.now();
    } while (currentDate - date < delay)
}

const IsFive = ({ value }) => {
    console.log(`🔴 isFive render: ${++renderCount}`);

    const getResult = () => {
        sleep(1500);

        return value === 5 ? '🟢 the count is five.' : `⛔ the count is not five : ${value}`
    }

    return (
        <div>
            {getResult()}
        </div >
    )
}

IsFive.propTypes = {
    value: PropTypes.number.isRequired,
};


export default IsFive;
