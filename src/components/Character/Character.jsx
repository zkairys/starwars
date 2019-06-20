import React from "react";
import Loader from "../Loader";
import Star from "../Star";

const Character = ({ singleCharacter, loading, addFavourites, favourites }) => {
  return (
    <div className="inner">
      {loading ? (
        <Loader />
      ) : (
        <div className="character">
          {singleCharacter.name && (
            <div className="flex-wrap">
              <h1 className="character__heading">{singleCharacter.name}</h1>
              <Star
                item={singleCharacter}
                addFavourites={addFavourites}
                favourites={favourites}
              />
            </div>
          )}
          <table>
            <tbody>
              {singleCharacter.height && (
                <tr>
                  <td>Height: </td>
                  <td>{singleCharacter.height}</td>
                </tr>
              )}
              {singleCharacter.mass && (
                <tr>
                  <td>Mass: </td>
                  <td>{singleCharacter.mass}</td>
                </tr>
              )}
              {singleCharacter.birth_year && (
                <tr>
                  <td>Birth Year: </td>
                  <td>{singleCharacter.birth_year}</td>
                </tr>
              )}
              {singleCharacter.eye_color && (
                <tr>
                  <td>Eye Color: </td>
                  <td>{singleCharacter.eye_color}</td>
                </tr>
              )}
              {singleCharacter.skin_color && (
                <tr>
                  <td>Skin Color: </td>
                  <td>{singleCharacter.skin_color}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Character;
