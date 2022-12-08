import React from "react";
import { useContext } from "react";
import { GlamourellaContext } from "../../utils/context/GlamourellaContext";
import Icons from "../atoms/Icons";
import SetNotificationCount from "../molecules/SetNotificationCount";

const BurgerButton = ({ handleClick }) => {
  const { burgerOptions } = useContext(GlamourellaContext);
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${burgerOptions.name} btn-icons`}
      aria-controls="primary-navigation"
      aria-expanded={burgerOptions.name === "x"}
      aria-label="menu">
      <Icons name={burgerOptions.name.toLowerCase()} size="2x" />
      <SetNotificationCount count={burgerOptions.notification} />
    </button>
  );
};

export default BurgerButton;
