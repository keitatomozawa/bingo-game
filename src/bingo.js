export const start = (state, intervalId) => ({
    ...state,
    started: true,
    intervalId: intervalId
});

export const stop = (state) => {
    clearInterval(state.intervalId);

    return {
        ...state,
        remains: state.remains.filter(n => n !== state.displayed),
        history: state.history.map((b, i) => i===state.displayed-1?true:b),
        intervalId: -1
    }
};

export const tick = (state) => ({
    ...state,
    displayed: state.remains[getRandomInt(0, state.ramains.length)]
});

export const reset = (state, maxNum) => initialState(maxNum);

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

export const initialState = (maxNum=75) => ({
    started: false,
    intervalId: -1,
    displayed: 1,
    remains: [...Array(maxNum).keys()].map(i => ++i),
    history: Array(maxNum).fill(false)
});