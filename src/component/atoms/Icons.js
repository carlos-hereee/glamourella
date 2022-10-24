import {
  faCalendarAlt,
  faHome,
  faImage,
  faInfoCircle,
  faListCheck,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Icons = ({ name, size }) => {
  const icons = {
    home: faHome,
    "about us": faInfoCircle,
    services: faListCheck,
    booking: faCalendarAlt,
    gallery: faImage,
    "contact us": faPhone,
  };
  return <FontAwesomeIcon icon={icons[name]} size={size} />;
};

export default Icons;
