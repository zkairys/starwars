import * as actionTypes from "../types";

export const initSingleCharacter = payload => {
  return {
    type: actionTypes.INIT_SINGLE_CHARACTER,
    payload
  };
};

export const setSingleCharacter = payload => {
  return {
    type: actionTypes.SET_SINGLE_CHARACTER,
    payload
  };
};
