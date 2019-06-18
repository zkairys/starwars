import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Header from "../components/Header/Header";
import Characters from "../components/Characters/Characters";
import { initCharacters } from "../redux/actions";

const Home = ({ initCharacters, characters }) => {
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
      />
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ initCharacters }, dispatch);
}

function mapStateToProps(state) {
  console.log(state);
  return {
    characters: state.characters
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
