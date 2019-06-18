import * as actionTypes from "../types";

export const initCharacters = payload => {
  return {
    type: actionTypes.INIT_CHARACTERS,
    payload
  };
};

export const setCharacters = payload => {
  return {
    type: actionTypes.SET_CHARACTERS,
    payload
  };
};
