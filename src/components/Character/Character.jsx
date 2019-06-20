import React from "react";
import Loader from "../Loader";

const Character = ({ singleCharacter, loading }) => {
  return (
    <div className="inner">
      {loading ? (
        <Loader />
      ) : (
        <div className="character">
          {singleCharacter.name && (
            <h1 className="character__heading">{singleCharacter.name}</h1>
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
