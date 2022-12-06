import Buttons from "./Buttons";
import { Link } from "react-router-dom";

/**
 *
 * data = {name=string, uid: string, notification: number}
 */
const Navlink = ({ data }) => {
  let n = data.name && data.name.split("-").join(" ");
  return (
    <li>
      <Link className="nav-link" to={n === "home" ? "" : data.name}>
        <Buttons name={n} notification={data.notification} />
      </Link>
    </li>
  );
};

export default Navlink;
