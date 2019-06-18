import React from "react";
import Filter from "./Filter";

const Characters = ({ characters }) => {
  return (
    <div className="characters">
      <Filter />
      {characters.length > 0 && (
        <div className="grid">
          {characters.map((item, index) => (
            <div key={index} className="grid__item">
              <h1>{item.name}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Characters;
