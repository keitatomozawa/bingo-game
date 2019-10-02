import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';

const RouletteButton = ({ started, onStartClick, onStopClick }) => (
    <div>
        {
            started ?
                <Button onClick={onStopClick} color="secondary" fullWidth={true} variant="contained">STOP</Button>
                :<Button onClick={onStartClick} color="primary" fullWidth={true} variant="contained">START</Button>
        }
    </div>
);

RouletteButton.propTypes = {
    started: PropTypes.bool.isRequired,
    onStartClick: PropTypes.func.isRequired,
    onStopClick:PropTypes.func.isRequired,
};

export default RouletteButton