import React, { useEffect } from "react";
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Header from "../components/Header/Header";
import Characters from "../components/Characters/Characters";
// import { initCharacters, filterCharacters } from "../redux/actions";
import { INIT_CHARACTERS, FILTER_CHARACTERS } from "../redux/types/";

const Home = ({
  initCharacters,
  characters,
  filterCharacters,
  charactersFiltered
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
      />
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    initCharacters: payload => dispatch({ type: INIT_CHARACTERS, payload }),
    filterCharacters: payload => dispatch({ type: FILTER_CHARACTERS, payload })
  };
  // bindActionCreators({ initCharacters, filterCharacters }, dispatch);
}

function mapStateToProps(state) {
  console.log(state);
  return {
    characters: state.characters,
    charactersFiltered: state.characters.charactersFiltered
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
