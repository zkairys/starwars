import * as actionTypes from "../types";

export const addFavaourites = payload => {
  return {
    type: actionTypes.ADD_FAVOURITES,
    payload
  };
};
