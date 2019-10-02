import { connect } from 'react-redux'
import RouletteButton from '../components/RouletteButton.js';
import {startRoulette, stopRoulette, tickNumber} from '../actions.js'

const mapStateToProps = (state, ownProps) => {
    return {
        started: state.started,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onStartClick: () => {
            const intervalId = setInterval( () => dispatch(tickNumber(), 500));
            dispatch(startRoulette(intervalId));
        },
        onStopClick: () => {
            dispatch(stopRoulette());
        }
    }
};

const ControlButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(RouletteButton);

export default ControlButton