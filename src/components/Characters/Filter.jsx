import React from "react";

const Filter = props => {
  return (
    <div className="inner inner--small">
      <div className="text-filter">
        <input type="text" id="filter" onChange={null} required="required" />
        <label htmlFor="filter">Search Characters</label>
      </div>
    </div>
  );
};

export default Filter;
