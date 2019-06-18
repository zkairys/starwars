import React from "react";

const Filter = ({ characters, filterCharacters }) => {
  const filterName = e => {
    console.log(e.target.value);
    const newcharacters = characters.filter(
      character =>
        character.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !==
        -1
    );

    return filterCharacters(newcharacters, e.target.value);

    // console.log(newcharacters);
    // characters.filter(character => {
    //   console.log(
    //     character.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !==
    //       -1
    //   );
    //   return (
    //     character.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !==
    //     -1
    //   );
    // });
  };

  return (
    <div className="inner inner--small">
      <div className="text-filter">
        <input
          type="text"
          id="filter"
          onChange={filterName}
          required="required"
        />
        <label htmlFor="filter">Search Characters</label>
      </div>
    </div>
  );
};

export default Filter;
