import { useState } from 'react';
import Buttons from './Buttons';
import PropTypes from 'prop-types';

const UseCallback = ({ data }) => {
    const [count, setCounter] = useState(0);

    const onPlus = () => setCounter((count) => count + 1);
    const onMinus = () => setCounter((count) => count - 1);

    return (
        <div className="app">
            <h2>useCallback</h2>
            <h3>{count}</h3>
            <Buttons onPlus={onPlus} onMinus={onMinus} data={data} />
        </div>
    );
}

UseCallback.propTypes = {
    data: PropTypes.string.isRequired,
}

export default UseCallback;
