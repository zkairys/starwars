import React from "react";
import Logo from "./../assets/logo.png";

const Header = props => (
  <>
    <header className={`favourites ${props.favouritesOpen && "open"}`}>
      <button className="btn btn--favourites" onClick={props.handleMenuOpen} />
      <div className="favourites__sidebar">
        <div className="inner">
          <h1>Header</h1>
          <img height="80px" src={Logo} alt="human" />
        </div>
      </div>
    </header>
  </>
);

export default Header;
