import React from 'react'
import PropTypes from 'prop-types'

const NumberField = ({ displayed }) => (
    <div>
        {displayed}
    </div>
);

NumberField.propTypes = {
    displayed: PropTypes.number.isRequired
};

export default NumberField