import * as actionTypes from "../types";

const initialState = {
  singleCharacter: []
};

const singleCharacter = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actionTypes.SET_SINGLE_CHARACTER:
      return {
        ...state,
        singleCharacter: state.characters.concat(payload.results)
      };
    default:
      return state;
  }
};

export default singleCharacter;
