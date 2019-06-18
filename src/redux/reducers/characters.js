import * as actionTypes from "../types";

const initialState = {
  count: null,
  characters: [],
  nextPage: null
};

const characters = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CHARACTERS:
      console.log(action);
      const { payload } = action;
      return {
        ...state,
        count: payload.count,
        characters: payload.results,
        nextPage: payload.next
      };
    default:
      return state;
  }
};

export default characters;
