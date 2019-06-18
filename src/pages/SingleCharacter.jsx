import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../components/Header/Header";
import { INIT_SINGLE } from "../redux/types/";

const Home = ({}) => {
  useEffect(() => {}, []);

  return (
    <>
      <Header />
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    // initCharacters: payload => dispatch({ type: INIT_CHARACTERS, payload })
  };
  // bindActionCreators({ initCharacters, filterCharacters }, dispatch);
}

function mapStateToProps(state) {
  console.log(state);
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
