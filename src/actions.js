/*
 * action types
 */
export const START_ROULETTE = 'START_ROULETTE';
export const STOP_ROULETTE = 'STOP_ROULETTE';
export const TOGGLE_VIEW = 'TOGGLE_VIEW';
export const RESET_GAME = 'RESET_GAME';

/*
 * other constants
 */

export const Views = {
    GAME: 'GAME',
    SETTINGS: 'SETTINGS',
    HISTORY: 'HISTORY'
};

/*
 * action creators
 */

export const startRoulette = () => {
    return { type: START_ROULETTE }
};

export const stopRoulette = () => {
    return { type: STOP_ROULETTE }
};

export const resetGame = () => {
    return { type: RESET_GAME }
};

export const toggleView = (view)  => {
    return { type: TOGGLE_VIEW, view }
};