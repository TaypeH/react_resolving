
import { useMemo, memo } from 'react'
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

    const getResult = useMemo(() => {
        sleep(1000);

        return value === 5 ? '🟢 the count is five.' : `⛔ the count is not five : ${value}`
    }, [value])

    return (
        <div>
            {getResult}
        </div >
    )
}

IsFive.propTypes = {
    value: PropTypes.number.isRequired,
};

const MemoizedIsFive = memo(IsFive, (prevProps, nextProps) => {
    return prevProps.value === nextProps.value;
});

export default MemoizedIsFive;
