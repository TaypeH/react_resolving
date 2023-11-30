import { memo } from "react";
import PropTypes from 'prop-types';

const someHardWork = () => {
    let i = 0;
    while (i < 5000000000) i++;
}

const Button = ({ onPlus, onMinus }) => {
    someHardWork();
    console.log('Button rendered');

    return (
        <div>
            <button onClick={onPlus}>+</button>
            <button onClick={onMinus}>-</button>
        </div>
    );
}

Button.propTypes = {
    onPlus: PropTypes.func.isRequired,
    onMinus: PropTypes.func.isRequired,
    data: PropTypes.string.isRequired,
}

const memoizedButton = memo(Button);

export default memoizedButton;
