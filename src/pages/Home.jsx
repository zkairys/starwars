import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Header from "../components/Header/Header";
import Characters from "../components/Characters/Characters";
import { initCharacters } from "../redux/actions";

const Home = ({ initCharacters, characters }) => {
  useEffect(() => {
    initCharacters();
  }, [initCharacters]);

  return (
    <>
      <Header />
      <h1 className="">Home Page</h1>
      <Characters characters={characters.characters} />
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
