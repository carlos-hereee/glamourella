import {
  fa0,
  fa1,
  fa2,
  fa3,
  fa4,
  fa5,
  fa6,
  fa7,
  fa8,
  fa9,
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
    1: fa1,
    2: fa2,
    3: fa3,
    4: fa4,
    5: fa5,
    6: fa6,
    7: fa7,
    8: fa8,
    9: fa9,
    0: fa0,
  };
  return <FontAwesomeIcon icon={icons[name]} size={size} />;
};

export default Icons;