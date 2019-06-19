import React from "react";

const Character = ({ singleCharacter }) => {
  return (
    <div className="inner">
      {singleCharacter !== undefined && (
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
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Character;
