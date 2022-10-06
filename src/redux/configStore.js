import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cryptosReducer from './cryptos/cryptos';
import detailsReducer from './details/details';
import filterReducer from './filter/filter';

const rootReducer = combineReducers({ cryptosReducer, detailsReducer, filterReducer });
const store = configureStore({ reducer: rootReducer });

export default store;
