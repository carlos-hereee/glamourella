import { faCcVisa, faInstagram } from "@fortawesome/free-brands-svg-icons";
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
  faBars,
  faBullseye,
  faCalendarAlt,
  faCalendarDay,
  faCheckCircle,
  faCircle,
  faCircleNotch,
  faEnvelope,
  faGlobe,
  faHands,
  faHandSpock,
  faHome,
  faImage,
  faInfo,
  faLeftLong,
  faListCheck,
  faMoneyBill,
  faPaperPlane,
  faShoePrints,
  faShoppingCart,
  faSpinner,
  faSquareCheck,
  faStore,
  faUpLong,
  faUsd,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const svg = {
  home: faHome,
  about: faInfo,
  services: faListCheck,
  booking: faCalendarAlt,
  accessories: faImage,
  "contact us": faEnvelope,
  checkout: faShoppingCart,
  pricing: faUsd,
  check: faCheckCircle,
  uncheck: faCircle,
  submit: faPaperPlane,
  dashboard: faUser,
  login: faUser,
  burger: faBars,
  instagram: faInstagram,
  wig: faUser,
  braids: faUser,
  nail: faHandSpock,
  all: faGlobe,
  manicure: faHands,
  pedicure: faShoePrints,
  promotion: faBullseye,
  schedule: faCalendarAlt,
  today: faCalendarDay,
  booked: faSquareCheck,
  appointments: faSquareCheck,
  left: faLeftLong,
  top: faUpLong,
  spinner: faSpinner,
  circle: faCircleNotch,
  store: faStore,
  "debit/credit-visa": faCcVisa,
  "cash-app": faMoneyBill,
  x: faX,
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
const Icons = ({ name, size, spin }) => {
  return (
    <FontAwesomeIcon
      icon={svg[name]}
      size={size}
      className="icon"
      spin={spin === "spin"}
      pulse={spin === "pulse"}
    />
  );
};

export default Icons;
