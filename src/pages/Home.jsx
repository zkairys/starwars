import React, { useEffect } from "react";
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Header from "../components/Header/Header";
import Characters from "../components/Characters/Characters";
// import { initCharacters, filterCharacters } from "../redux/actions";
import {
  INIT_CHARACTERS,
  FILTER_CHARACTERS,
  ADD_FAVOURITES
} from "../redux/types/";

const Home = ({
  initCharacters,
  characters,
  filterCharacters,
  charactersFiltered,
  addFavourites,
  favourites
}) => {
  useEffect(() => {
    initCharacters("1");
  }, [initCharacters]);

  return (
    <>
      <Header />
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
    addFavourites: payload => dispatch({ type: ADD_FAVOURITES, payload })
  };
  // bindActionCreators({ initCharacters, filterCharacters }, dispatch);
}

function mapStateToProps(state) {
  console.log(state);
  return {
    characters: state.characters,
    charactersFiltered: state.characters.charactersFiltered,
    favourites: state.favourites.favourites
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
