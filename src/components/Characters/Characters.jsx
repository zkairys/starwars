import React from "react";
import Filter from "./Filter";
import Grid from "./Grid";

const Characters = ({
  characters,
  nextPage,
  initCharacters,
  filterCharacters,
  charactersFiltered,
  addFavourites,
  favourites
}) => {
  return (
    <div className="characters">
      <Filter characters={characters} filterCharacters={filterCharacters} />
      <Grid
        characters={characters}
        charactersFiltered={charactersFiltered}
        addFavourites={addFavourites}
        favourites={favourites}
      />
    </div>
  );
};

export default Characters;
