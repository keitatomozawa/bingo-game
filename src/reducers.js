import * as bingo from './bingo.js';
import { START_ROULETTE, STOP_ROULETTE, RESET_GAME, TICK } from './actions.js';

export const rootReducer = (state=bingo.initialState(), action) => {
    switch (action.type) {
        case START_ROULETTE:
            return bingo.start(state, action.intervalId);
        case STOP_ROULETTE:
            return bingo.stop(state);
        case TICK:
            return bingo.tick(state);
        case RESET_GAME:
            console.log(action.maxNum);
            return bingo.reset(state, Number(action.maxNum));
        default:
            return state;
    }
};