import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_DATA = 'cryptos/FETCH_DATA';
const FETCH_DATA_FULFILLED = 'cryptos/FETCH_DATA/fulfilled';

const initialState = [
  {
    id: 'bitcoin', symbol: 'btc', name: 'Bitcoin', image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579', current_price: 20369,
  },
  {
    id: 'ethereum', symbol: 'eth', name: 'Ethereum', image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880', current_price: 1365.5,
  },
  {
    id: 'tether', symbol: 'usdt', name: 'Tether', image: 'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707', current_price: 1.001,
  },
  {
    id: 'binancecoin', symbol: 'bnb', name: 'BNB', image: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850', current_price: 296.77,
  },
];

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
