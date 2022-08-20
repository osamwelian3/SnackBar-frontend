import { createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initialState = {};

const middleware = [thunk];

// const store = configureStore({
//     reducer: rootReducer,
//     initialState,
//     middleware: composeWithDevTools(applyMiddleware(...middleware))
// });

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
