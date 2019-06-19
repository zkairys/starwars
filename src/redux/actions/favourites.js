import * as actionTypes from "../types";

export const addFavourites = payload => {
  return {
    type: actionTypes.ADD_FAVOURITES,
    payload
  };
};

export const removeFavourites = payload => {
  return {
    type: actionTypes.REMOVE_FAVOURITES,
    payload
  };
};

export const toggleModal = payload => {
  return {
    type: actionTypes.TOGGLE_MODAL,
    payload
  };
};
