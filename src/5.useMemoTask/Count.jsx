import PropTypes from 'prop-types';

const render = {
    count1: 0,
    count2: 0,
}

const Count = ({ id, value }) => {
    console.log(`🔴 Count${id} render: ${++render[`count${id}`]}`);

    return (
        <div>
            <h1 className="cyan">{value}</h1>
        </div>
    )
}

Count.propTypes = {
    id: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

export default Count;

