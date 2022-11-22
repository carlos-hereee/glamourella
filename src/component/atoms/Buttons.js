import React from "react";
import Icons from "./Icons";
import NotificationCount from "./NotificationCount";

const Buttons = ({ name, handleClick, notification, size }) => {
  return (
    <button type="button" onClick={handleClick} className={name}>
      <Icons name={name.toLowerCase()} size={size} />
      {name !== "burger" && (
        <span>{name[0].toUpperCase() + name.substring(1)}</span>
      )}
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
