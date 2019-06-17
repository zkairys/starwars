import React from "react";
import { ReactComponent as Logo } from "../img/logo.svg";
import { ReactComponent as HeaderSlack } from "../img/header-slash.svg";

const Header = props => (
  <>
    <header className={`favourites ${props.favouritesOpen && "open"}`}>
      <button className="btn btn--favourites" onClick={props.handleMenuOpen} />
      <div className="favourites__sidebar">
        <div className="inner">
          <h1>Header</h1>
        </div>
      </div>
    </header>
  </>
);

export default Header;
