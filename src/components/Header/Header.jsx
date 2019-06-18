import React from "react";
import Logo from "./Logo";
import Favourites from "./Favourites";

const Header = props => (
  <header className="header">
    <Logo />
    <Favourites />
  </header>
);

export default Header;
