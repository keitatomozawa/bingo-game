import React from 'react'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import {createStore} from 'redux'

import App from './container.js'
import {rootReducer} from './reducers.js'

import {
    startRoulette,
    stopRoulette,
    tickNumber,
    resetGame,
    toggleView
} from "./actions";

const store = createStore(rootReducer);

console.log(store.getState());
const unsbscribe = store.subscribe(()=>console.log(store.getState()));

store.dispatch(startRoulette('aaa'));
store.dispatch(tickNumber(10));
store.dispatch(stopRoulette());
store.dispatch(startRoulette('bbb'));
store.dispatch(tickNumber(15));
store.dispatch(stopRoulette());
store.dispatch(resetGame(65));

unsbscribe()
// render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('app')
// );