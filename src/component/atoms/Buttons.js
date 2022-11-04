import React from "react";
import Icons from "./Icons";

const Buttons = ({ name, onClick }) => {
  return (
    <button type="button" className="btn" onClick={onClick}>
      <Icons name={name} /> {name.toUpperCase()}
    </button>
  );
};

export default Buttons;
