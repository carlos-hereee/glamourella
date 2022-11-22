import React from "react";
import Icons from "./Icons";

const NotificationCount = ({ num }) => (
  <span className="notification-count">{<Icons name={num} />}</span>
);
const Buttons = ({ name, handleClick, notification }) => {
  return (
    <button type="button" onClick={handleClick}>
      <Icons name={name.toLowerCase()} />
      <span>{name[0].toUpperCase() + name.substring(1)} </span>
      {notification &&
        (notification.length > 10 ? (
          notification.map((n) => <NotificationCount num={n} />)
        ) : (
          <NotificationCount num={notification} />
        ))}
    </button>
  );
};

export default Buttons;
