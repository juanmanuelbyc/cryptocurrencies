import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cryptosReducer from './cryptos/cryptos';
import detailsReducer from './details/details';

const rootReducer = combineReducers({ cryptosReducer, detailsReducer });
const store = configureStore({ reducer: rootReducer });

export default store;
