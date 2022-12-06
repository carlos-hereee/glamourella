import { Link } from "react-router-dom";
import Buttons from "../component/molecules/Buttons";

const NotFound = () => {
  return (
    <main className="container">
      <section className="card">
        <h2>Page Not Found</h2>
        <div className="card-body">
          <Link to="/" className="nav-link">
            <Buttons name="Home" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
