import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../components/Header/Header";
import { INIT_SINGLE_CHARACTER } from "../redux/types/";
import Character from "../components/Character/Character";

const Home = ({ name, initCharacters, singleCharacter }) => {
  useEffect(() => {
    initCharacters(name);
  }, [initCharacters, name]);

  return (
    <>
      <Header />
      <Character singleCharacter={singleCharacter} />
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    initCharacters: payload =>
      dispatch({ type: INIT_SINGLE_CHARACTER, payload })
  };
  // bindActionCreators({ initCharacters, filterCharacters }, dispatch);
}

function mapStateToProps(state, ownProps) {
  console.log(state);
  return {
    name: ownProps.match.params.character_name,
    singleCharacter: state.singleCharacter.singleCharacter[0]
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
