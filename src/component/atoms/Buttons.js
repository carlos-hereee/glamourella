import React from "react";
import Icons from "./Icons";

const Buttons = ({ name, handleClick }) => {
  return (
    <button type="button" onClick={handleClick}>
      <Icons name={name.toLowerCase()} /> {name}
    </button>
  );
};

export default Buttons;
