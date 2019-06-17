import * as actionTypes from "../types";

export const initCharacters = () => {
  return {
    type: actionTypes.INIT_CHARACTERS
  };
};

export const setCharacters = payload => {
  return {
    type: actionTypes.SET_CHARACTERS,
    payload
  };
};
