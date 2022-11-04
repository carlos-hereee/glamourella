import React from "react";
import Icons from "./Icons";

const Buttons = ({ name, handleClick }) => {
  return (
    <button type="button" className="btn" onClick={handleClick}>
      <Icons name={name} /> {name.toUpperCase()}
    </button>
  );
};

export default Buttons;
