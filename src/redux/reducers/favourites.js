import * as actionTypes from "../types";

const initialState = {
  favourites: []
};

const favourites = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FAVOURITES:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default favourites;
