import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../components/Header/Header";
import {
  INIT_SINGLE_CHARACTER,
  ADD_FAVOURITES,
  REMOVE_FAVOURITES,
  TOGGLE_MODAL
} from "../redux/types/";
import Character from "../components/Character/Character";
import Modal from "../components/Modal";

const Home = ({
  name,
  initCharacters,
  singleCharacter,
  addFavourites,
  favourites,
  modalOpen,
  removeFavourites,
  toggleModal
}) => {
  useEffect(() => {
    initCharacters(name);
  }, [initCharacters, name]);

  return (
    <>
      <Header toggleModal={toggleModal} />
      <Modal
        favourites={favourites}
        modalOpen={modalOpen}
        removeFavourites={removeFavourites}
      />
      <Character
        singleCharacter={singleCharacter}
        addFavourites={addFavourites}
        favourites={favourites}
      />
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    initCharacters: payload =>
      dispatch({ type: INIT_SINGLE_CHARACTER, payload }),
    addFavourites: payload => dispatch({ type: ADD_FAVOURITES, payload }),
    removeFavourites: payload => dispatch({ type: REMOVE_FAVOURITES, payload }),
    toggleModal: payload => dispatch({ type: TOGGLE_MODAL, payload })
  };
  // bindActionCreators({ initCharacters, filterCharacters }, dispatch);
}

function mapStateToProps(state, ownProps) {
  console.log(state);
  return {
    name: ownProps.match.params.character_name,
    singleCharacter: state.singleCharacter.singleCharacter[0],
    favourites: state.favourites.favourites,
    modalOpen: state.favourites.modalOpen
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
