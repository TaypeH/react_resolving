import PropTypes from 'prop-types';

const someHardWork = () => {
    let i = 0;
    while (i < 5000000000) i++;
}

const Buttons = ({ onPlus, onMinus }) => {
    // someHardWork();
    console.log('Button rendered');

    return (
        <div>
            <button onClick={onPlus}>+</button>
            <button onClick={onMinus}>-</button>
        </div>
    );
}

Buttons.propTypes = {
    onPlus: PropTypes.func.isRequired,
    onMinus: PropTypes.func.isRequired,
    data: PropTypes.string.isRequired,
}

export default Buttons;
