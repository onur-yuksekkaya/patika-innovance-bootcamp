import React from "react";

const Character = ({
  positionx,
  positiony,
  bgpositionx,
  bgpositiony,
  characterImg,
}) => {
  // my characters components
  return (
    <div
      style={{
        position: "sticky",
        top: `${positiony}px`,
        left: `${positionx}px`,
        height: "32px",
        width: "32px",
        backgroundImage: `${characterImg}`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: `-${bgpositionx}px -${bgpositiony}px`,
      }}
    />
  );
};

export default Character;
