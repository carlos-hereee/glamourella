import React from "react";
import Icons from "./Icons";

const Buttons = ({ name, handleClick, count }) => {
  return (
    <button type="button" onClick={handleClick}>
      <Icons name={name.toLowerCase()} /> {name}
      {count ? (
        <span className="notification-count">{<Icons name={count} />}</span>
      ) : (
        ""
      )}
    </button>
  );
};

export default Buttons;
