import React from "react";
import Filter from "./Filter";
import Grid from "./Grid";

const Characters = ({
  characters,
  nextPage,
  initCharacters,
  filterCharacters,
  charactersFiltered
}) => {
  const loadMore = () => {
    initCharacters(nextPage.charAt(nextPage.length - 1));
  };

  return (
    <div className="characters">
      <Filter characters={characters} filterCharacters={filterCharacters} />
      <Grid characters={characters} charactersFiltered={charactersFiltered} />
      {nextPage !== null && (
        <div className="flex-wrap">
          <button className="btn btn--flex btn--custom" onClick={loadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Characters;
