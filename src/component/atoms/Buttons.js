import React from "react";
import Icons from "./Icons";

const Buttons = ({ name }) => {
  return (
    <button type="button" className="btn">
      <Icons name={name} /> {name.toUpperCase()}
    </button>
  );
};

export default Buttons;
