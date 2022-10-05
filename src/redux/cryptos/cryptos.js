import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_DATA = 'cryptos/FETCH_DATA';
const FETCH_DATA_FULFILLED = 'cryptos/FETCH_DATA/fulfilled';

const initialState = [];

const cryptosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_FULFILLED:
      return action.payload;
    default:
      return state;
  }
};

export const fetchData = createAsyncThunk(
  FETCH_DATA,
  async () => {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';
    const response = await fetch(url).then((response) => response.json());
    return response;
  },
);

export default cryptosReducer;
