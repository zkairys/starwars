import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../components/Header/Header";
import { INIT_SINGLE_CHARACTER, ADD_FAVOURITES } from "../redux/types/";
import Character from "../components/Character/Character";

const Home = ({
  name,
  initCharacters,
  singleCharacter,
  addFavourites,
  favourites
}) => {
  useEffect(() => {
    initCharacters(name);
  }, [initCharacters, name]);

  return (
    <>
      <Header favourites={favourites} />
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
    addFavourites: payload => dispatch({ type: ADD_FAVOURITES, payload })
  };
  // bindActionCreators({ initCharacters, filterCharacters }, dispatch);
}

function mapStateToProps(state, ownProps) {
  console.log(state);
  return {
    name: ownProps.match.params.character_name,
    singleCharacter: state.singleCharacter.singleCharacter[0],
    favourites: state.favourites.favourites
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
