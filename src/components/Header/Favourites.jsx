import React from "react";

const Favourites = props => (
  <div className={`favourites ${props.favouritesOpen && "favourites--open"}`} />
);

export default Favourites;
