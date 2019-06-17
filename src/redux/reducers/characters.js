import * as actionTypes from "../types";

const initialState = {
  characters: []
};

const characters = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CHARACTERS:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default characters;
