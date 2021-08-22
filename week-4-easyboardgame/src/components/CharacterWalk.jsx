import React, { useEffect, useState } from "react";
import Character from "./Character";
import useKeyPress from "./hooks/use-key-press";

const CharacterWalk = (characterImg) => {
  const [positionx, setPositionx] = useState(() => {
    const localData = localStorage.getItem("position");
    return localData ? JSON.parse(localData).positionx : 0;
  });
  const [positiony, setPositiony] = useState(() => {
    const localData = localStorage.getItem("position");
    return localData ? JSON.parse(localData).positiony : 0;
  });
  const [bgpositionx, setBgPositionx] = useState(0);
  const [bgpositiony, setBgPositiony] = useState(0);
  const [stepSize, setStepSize] = useState(16);

  useEffect(() => {
    localStorage.setItem("position", JSON.stringify({ positionx, positiony }));
  }, [positionx, positiony]);

  // walk animations for character , settings only image x position
  const walkAnimation = () => {
    setBgPositionx(bgpositionx + 32);
    if (bgpositionx > 32) {
      setBgPositionx(0);
    }
  };
  // changing character walks speed
  const walkSpeed = () => {
    if (stepSize === 16) setStepSize(32);
    else setStepSize(16);
  };

  // key settings
  useKeyPress((e) => {
    switch (e.key) {
      case " ":
        walkSpeed();
        break;
      case "ArrowDown":
        setPositiony(positiony + stepSize);
        walkAnimation();
        setBgPositiony(0);
        break;
      case "ArrowLeft":
        setPositionx(positionx - stepSize);
        walkAnimation();
        setBgPositiony(32);
        break;
      case "ArrowRight":
        setPositionx(positionx + stepSize);
        walkAnimation();
        setBgPositiony(64);
        break;
      case "ArrowUp":
        setPositiony(positiony - stepSize);
        walkAnimation();
        setBgPositiony(96);
        break;
      default:
    }
    e.preventDefault();
  });
  return (
    <>
      <Character
        positionx={positionx}
        positiony={positiony}
        bgpositionx={bgpositionx}
        bgpositiony={bgpositiony}
        characterImg={characterImg.characterImg}
      />
    </>
  );
};

export default CharacterWalk;
