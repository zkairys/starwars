import * as actionTypes from "../types";

const initialState = {
  singleCharacter: [],
  loading: true
};

const singleCharacter = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actionTypes.SET_SINGLE_CHARACTER:
      return {
        ...state,
        singleCharacter: payload.results,
        loading: false
      };
    case actionTypes.INIT_SINGLE_CHARACTER:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default singleCharacter;
