import { connect } from 'react-redux';
import { App } from './app.js';
import * as action from './actions.js';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch, props) => ({
    startRoulette: () => {
        const intervalId = setInterval(()=>dispatch(action.tickNumber(), 500));
        dispatch(action.startRoulette(intervalId));
    },
    stopRoulette: () => dispatch(action.stopRoulette()),
    tickNumber: () => dispatch(action.tickNumber()),
    resetGame: () => dispatch(action.resetGame())
});

function mergeProps (stateProps, dispatchProps, ownProps) {
    return Object.assign({}, stateProps, dispatchProps, ownProps, {
        // タイマーが止まっていたら、カウントアップを開始する
        startTimer: () => {
            if (stateProps.remains.length===0) dispatchProps.resetGame()
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);