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
  faCheckCircle,
  faCircle,
  faHome,
  faImage,
  faInfoCircle,
  faListCheck,
  faPaperPlane,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const svg = {
  home: faHome,
  "about us": faInfoCircle,
  services: faListCheck,
  booking: faCalendarAlt,
  gallery: faImage,
  "contact us": faPhone,
  check: faCheckCircle,
  uncheck: faCircle,
  submit: faPaperPlane,
  account: faUser,
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
const Icons = ({ name, size }) => {
  return <FontAwesomeIcon icon={svg[name]} size={size} />;
};

export default Icons;
