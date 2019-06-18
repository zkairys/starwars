import React from "react";
import Star from "./../Star";

const Grid = ({ characters }) => {
  return (
    <div className="inner">
      {characters.length > 0 && (
        <div className="grid">
          {characters.map((item, index) => (
            <>
              <div key={index} className="grid__item">
                <div className="flex-wrap">
                  <h1 className="grid__item__heading">{item.name}</h1>
                  <Star />
                </div>
                <button className="btn btn--flex">More Details</button>
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default Grid;
