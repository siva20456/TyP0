// // store.js
// import { createStore,applyMiddleware } from 'redux';
// import thunk from 'redux-thunk'
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './reducers';

const store = configureStore({reducer:rootReducer});

export default store;
