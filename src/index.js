import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider, connect } from 'react-redux';
import { createStore } from "redux";


// Action Creators

function startTimer(baseTime = 0) {
    return {
        type: "START_TIMER",
        baseTime: baseTime,
        now: new Date().getTime()
    };
}

function stopTimer() {
    return {
        type: "STOP_TIMER",
        now: new Date().getTime()
    };
}

function resetTimer() {
    return {
        type: "RESET_TIMER",
        now: new Date().getTime()
    }
}


// Reducer / Store

const initialState = {
    startedAt: undefined,
    stoppedAt: undefined,
    baseTime: undefined
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "RESET_TIMER":
            return {
                ...state,
                baseTime: 0,
                startedAt: state.startedAt ? action.now : undefined,
                stoppedAt: state.stoppedAt ? action.now : undefined
            };
        case "START_TIMER":
            return {
                ...state,
                baseTime: action.baseTime,
                startedAt: action.now,
                stoppedAt: undefined
            };
        case "STOP_TIMER":
            return {
                ...state,
                stoppedAt: action.now
            }
        default:
            return state;
    }
}

const store = createStore(reducer);


// Helper function that takes store state
// and returns the current elapsed time
function getElapsedTime(baseTime, startedAt, stoppedAt = new Date().getTime()) {
    if (!startedAt) {
        return 0;
    } else {
        return stoppedAt - startedAt + baseTime;
    }
}


// Components

class Application extends React.Component {
    render() {
        return (
            <div>
                <Timer updateInterval={33} />
                <Timer updateInterval={1000} />
            </div>
        );
    }
}

class Timer extends React.Component {
    componentDidMount() {
        this.interval = setInterval(this.forceUpdate.bind(this), this.props.updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { baseTime, startedAt, stoppedAt } = this.props;
        const elapsed = getElapsedTime(baseTime, startedAt, stoppedAt);

        return (
            <div>
                <div>Time: {elapsed}</div>
                <div>
                    <button onClick={() => this.props.startTimer(elapsed)}>Start</button>
                    <button onClick={() => this.props.stopTimer()}>Stop</button>
                    <button onClick={() => this.props.resetTimer()}>Reset</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { baseTime, startedAt, stoppedAt } = state;
    return { baseTime, startedAt, stoppedAt };
}

Timer = connect(mapStateToProps, { startTimer, stopTimer, resetTimer })(Timer);


// Entry

ReactDOM.render((
    <Provider store={store}>
        <Application />
    </Provider>
), document.getElementById("app"));
