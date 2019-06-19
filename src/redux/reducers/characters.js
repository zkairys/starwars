import * as actionTypes from "../types";

const initialState = {
  count: null,
  characters: [],
  charactersFiltered: [],
  nextPage: null
};

const characters = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actionTypes.SET_CHARACTERS:
      return {
        ...state,
        count: payload.count,
        characters: payload.results,
        nextPage: payload.next,
        charactersFiltered: payload.results
      };
    case actionTypes.FILTER_CHARACTERS:
      console.log("FILTER_CHARACTERS", action);
      return {
        ...state,
        charactersFiltered: payload
      };
    default:
      return state;
  }
};

export default characters;
