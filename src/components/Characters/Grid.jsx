import React from "react";
import Star from "./../Star";
import { Link } from "react-router-dom";

const Grid = ({ characters, charactersFiltered }) => {
  return (
    <div className="inner">
      {characters.length > 0 && (
        <div className="grid">
          {charactersFiltered.map((item, index) => (
            <div key={index} className="grid__item">
              <div className="flex-wrap">
                <h1 className="grid__item__heading">{item.name}</h1>
                <Star />
              </div>
              {/* <button className="btn btn--flex">More Details</button> */}
              <Link className="btn btn--flex btn--link" to={`/${item.name}`}>
                More Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Grid;
