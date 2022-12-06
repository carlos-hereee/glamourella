import React from "react";
import Icons from "./Icons";
import NotificationCount from "./NotificationCount";

const BurgerButton = ({ data, handleClick }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${data.name} btn-icons`}
      aria-controls="primary-navigation"
      aria-expanded={data.name === "x"}
      aria-label="menu">
      <Icons name={data.name.toLowerCase()} size="2x" />
      {data.notification &&
        (data.notification.length > 9 ? (
          data.notification.map((n) => <NotificationCount num={n} />)
        ) : (
          <NotificationCount num={data.notification} />
        ))}
    </button>
  );
};

export default BurgerButton;
