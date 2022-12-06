import React from "react";
import Icons from "./Icons";
import NotificationCount from "./NotificationCount";

const Buttons = ({ name, handleClick, notification, size }) => {
  const n = name && name.toLowerCase();
  return (
    <button type="button" onClick={handleClick} className={`${name} btn-icons`}>
      <Icons name={n} size={size} />
      <span className="icon-label">
        {name[0].toUpperCase() + name.substring(1)}
      </span>
      {notification &&
        (notification.length > 9 ? (
          notification.map((n) => <NotificationCount num={n} />)
        ) : (
          <NotificationCount num={notification} />
        ))}
    </button>
  );
};

export default Buttons;
