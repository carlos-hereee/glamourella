import Buttons from "./Buttons";
import { Link } from "react-router-dom";

/**
 *
 * data = {name=string, uid: string, notification: number}
 */
const Navlink = ({ data }) => {
  let n = data.name.split("-").join(" ");
  return (
    <Link className="nav-link" to={n === "home" ? "" : n}>
      <Buttons name={n} notification={data.notification} />
    </Link>
  );
};

export default Navlink;
