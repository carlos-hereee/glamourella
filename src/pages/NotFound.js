import { Link } from "react-router-dom";
import Buttons from "../component/atoms/Buttons";

const NotFound = () => {
  return (
    <main>
      <h2>Page Not Found</h2>
      <Link to="/">
        <Buttons name="home" />
      </Link>
    </main>
  );
};

export default NotFound;
