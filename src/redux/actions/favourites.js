import * as actionTypes from "../types";

export const addFavourites = payload => {
  return {
    type: actionTypes.ADD_FAVOURITES,
    payload
  };
};
