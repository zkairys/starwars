import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Characters from "../components/Characters";
import { initCharacters } from "../redux/actions";

const Home = props => {
  React.useEffect(() => {
    props.initCharacters();
    props.initCharacters();
  }, []);

  return (
    <div className="inner">
      <h1 className="">Home Page</h1>
      <Characters />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ initCharacters }, dispatch);
}

function mapStateToProps(state) {
  return {
    characters: state.characters
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
