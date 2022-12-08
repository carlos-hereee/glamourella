import React from "react";
import Icons from "../atoms/Icons";
import SetNotificationCount from "./SetNotificationCount";

const Buttons = ({ name, handleClick, notification, size }) => {
  const n = name && name.toLowerCase();
  return (
    <button type="button" onClick={handleClick} className={`${name} btn-icons`}>
      <Icons name={n} size={size} />
      <span className="icon-label">
        {name[0].toUpperCase() + name.substring(1)}
      </span>
      <SetNotificationCount count={notification} />
    </button>
  );
};

export default Buttons;
