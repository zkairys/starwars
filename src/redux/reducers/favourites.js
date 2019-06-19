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
        favourites: state.favourites.find(
          favourite => favourite.name === payload.name
        )
          ? state.favourites
          : state.favourites.concat(payload)
      };
    case actionTypes.REMOVE_FAVOURITES:
      return {
        ...state
      };
    case actionTypes.TOGGLE_MODAL:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default favourites;
