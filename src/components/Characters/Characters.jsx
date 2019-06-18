import React from "react";
import Filter from "./Filter";
import Grid from "./Grid";

const Characters = ({ characters }) => {
  return (
    <div className="characters">
      <Filter />
      <Grid characters={characters} />
      <div className="flex-wrap">
        <button className="btn btn--flex btn--custom">Load More</button>
      </div>
    </div>
  );
};

export default Characters;
