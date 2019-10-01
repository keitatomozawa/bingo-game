/*
 * action types
 */
export const START_ROULETTE = 'START_ROULETTE';
export const STOP_ROULETTE = 'STOP_ROULETTE';
export const TOGGLE_VIEW = 'TOGGLE_VIEW';
export const TICK = 'TICK';
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
export const startRoulette = (intervalId) => ({
    type: START_ROULETTE,
    intervalId
});

export const stopRoulette = () => ({
   type: STOP_ROULETTE
});

export const resetGame = (maxNum=75) => ({
    type: RESET_GAME,
    maxNum
});

export const tickNumber = (nextInt=1) => ({
    type: TICK,
    nextInt
});

export const toggleView = (view)  => ({
    type: TOGGLE_VIEW,
    view
});