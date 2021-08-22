import React, { useState } from "react";
import CharacterWalk from "./CharacterWalk";

const SelectCharacter = () => {
  const [characterImg, setCharacterImg] = useState(
    "url(./assets/characters/f1.png)"
  );
  // select characters
  return (
    <div className="select-area">
      <select
        className="dropdown"
        name="character"
        id="character"
        onChange={(e) => {
          setCharacterImg(`url(./assets/characters/${e.target.value}.png)`);
        }}
      >
        <option className="dropdown-options" value="f1">
          Female Character 1
        </option>
        <option className="dropdown-options" value="f2">
          Female Character 2
        </option>
      </select>
      <div className="zone-container">
        <CharacterWalk characterImg={characterImg} />
      </div>
    </div>
  );
};

export default SelectCharacter;
