import React from "react";
import Filter from "./Filter";
import Grid from "./Grid";

const Characters = ({ characters, nextPage, initCharacters }) => {
  const loadMore = () => {
    initCharacters(nextPage.charAt(nextPage.length - 1));
  };

  return (
    <div className="characters">
      <Filter />
      <Grid characters={characters} />
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
