import React from "react";
import Logo from "./Logo";
import Favourites from "./Favourites";

const Header = ({ toggleModal }) => (
  <header className="header">
    <Logo toggleModal={toggleModal} />
    <Favourites />
  </header>
);

export default Header;
