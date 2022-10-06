const UPDATE_FILTER_STATUS = 'details/UPDATE_FILTER_STATUS';
const UPDATE_FILTER_TEXT = 'details/UPDATE_FILTER_TEXT';

const initialState = {
  status: 1,
  filterText: '',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTER_STATUS:
      return { ...state, filterStatus: action.payload };
    case UPDATE_FILTER_TEXT:
      return { ...state, filterText: action.payload };
    default:
      return state;
  }
};

export const updateFilterStatus = (status) => ({
  type: UPDATE_FILTER_STATUS,
  payload: status,
});

export const updateFilterText = (text) => ({
  type: UPDATE_FILTER_TEXT,
  payload: text,
});

export default filterReducer;
