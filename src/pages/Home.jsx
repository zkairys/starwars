import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../components/Header/Header";
import Modal from "../components/Modal";
import Characters from "../components/Characters/Characters";
import {
  INIT_CHARACTERS,
  FILTER_CHARACTERS,
  ADD_FAVOURITES,
  REMOVE_FAVOURITES,
  TOGGLE_MODAL
} from "../redux/types/";

const Home = ({
  initCharacters,
  characters,
  filterCharacters,
  charactersFiltered,
  addFavourites,
  favourites,
  toggleModal,
  modalOpen,
  removeFavourites
}) => {
  useEffect(() => {
    initCharacters("1");
  }, [initCharacters]);

  return (
    <>
      <Header toggleModal={toggleModal} />
      <Modal
        favourites={favourites}
        modalOpen={modalOpen}
        removeFavourites={removeFavourites}
      />
      <Characters
        characters={characters.characters}
        nextPage={characters.nextPage}
        initCharacters={initCharacters}
        charactersFiltered={charactersFiltered}
        filterCharacters={filterCharacters}
        addFavourites={addFavourites}
        favourites={favourites}
      />
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    initCharacters: payload => dispatch({ type: INIT_CHARACTERS, payload }),
    filterCharacters: payload => dispatch({ type: FILTER_CHARACTERS, payload }),
    addFavourites: payload => dispatch({ type: ADD_FAVOURITES, payload }),
    removeFavourites: payload => dispatch({ type: REMOVE_FAVOURITES, payload }),
    toggleModal: payload => dispatch({ type: TOGGLE_MODAL, payload })
  };
}

function mapStateToProps(state) {
  return {
    characters: state.characters,
    charactersFiltered: state.characters.charactersFiltered,
    favourites: state.favourites.favourites,
    modalOpen: state.favourites.modalOpen
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
