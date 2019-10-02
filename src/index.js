import React from 'react'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import {createStore} from 'redux'

import App from './components/App';
import {rootReducer} from './reducers.js'

const store = createStore(rootReducer);

// console.log(store.getState());
// const unsbscribe = store.subscribe(()=>console.log(store.getState()));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);