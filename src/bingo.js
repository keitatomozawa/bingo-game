export const start = (state, intervalId) => ({
    ...state,
    started: true,
    intervalId: intervalId
});

export const stop = (state) => {
    clearInterval(state.intervalId);

    return {
        ...state,
        started: false,
        remains: state.remains.filter(n => n !== state.displayed),
        table: state.table.map((b, i) => i===state.displayed-1?true:b),
        history: [state.displayed, ...state.history],
        intervalId: -1
    }
};

export const tick = (state) => ({
    ...state,
    displayed: state.remains[getRandomInt(0, state.remains.length)]
});



const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

export const reset = (state, maxNum) => {
    clearInterval(state.intervalId);
    return initialState(maxNum);
};

export const initialState = (maxNum=75) => ({
    started: false,
    intervalId: -1,
    displayed: 1,
    remains: [...Array(maxNum).keys()].map(i => ++i),
    table: Array(maxNum).fill(false),
    history: []
});