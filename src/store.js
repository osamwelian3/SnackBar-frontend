import { createStore, applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import * as actionCreaters from './actions/auth'

const initialState = {};

const middleware = [thunk];

// const store = configureStore({
//     reducer: rootReducer,
//     initialState,
//     middleware: composeWithDevTools(applyMiddleware(...middleware))
// });

const composedEnhancer = composeWithDevTools({actionCreaters, trace: true, traceLimit: 25})

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancer(applyMiddleware(...middleware))
    // composeWithDevTools(applyMiddleware(...middleware)),
    // composeWithDevTools({actionCreaters, trace: true, traceLimit: 25})
);

export default store;
