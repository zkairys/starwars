import * as actionTypes from "../types";

const initialState = {
  favourites: []
};

const favourites = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actionTypes.ADD_FAVOURITES:
      return {
        ...state,
        favourites:
          state.favourites.indexOf(payload) === -1
            ? state.favourites.concat(payload)
            : state.favourites
      };
    default:
      return state;
  }
};

export default favourites;
