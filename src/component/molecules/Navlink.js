import { Link } from "react-router-dom";
import Buttons from "./buttons/Buttons";

/**
 *
 * data = {name=string, uid: string, notification: number}
 */
const Navlink = ({ data, handleClick }) => {
  let n = data.name && data.name.split("-").join(" ");
  return (
    <li>
      <Link className="nav-link" to={n === "home" ? "" : data.name}>
        <Buttons
          name={n}
          notification={data.notification}
          handleClick={handleClick}
        />
      </Link>
    </li>
  );
};

export default Navlink;
