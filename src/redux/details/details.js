const UPDATE_DETAILS_INDEX = 'details/UPDATE_DETAILS_INDEX';

const initialState = 0;

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DETAILS_INDEX:
      return action.payload;
    default:
      return state;
  }
};

export const updateDetailsIndex = (index) => ({
  type: UPDATE_DETAILS_INDEX,
  payload: index,
});

export default detailsReducer;
