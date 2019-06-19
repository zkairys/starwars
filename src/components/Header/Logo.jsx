import React from "react";
import LogoImage from "./../../assets/logo.png";

const Logo = ({ toggleModal }) => (
  <div className="header__button">
    <button className="btn btn--wrapper" onClick={toggleModal} />
    <img
      className="header__button__image"
      height="80px"
      src={LogoImage}
      alt="Star Wars"
    />
  </div>
);

export default Logo;
