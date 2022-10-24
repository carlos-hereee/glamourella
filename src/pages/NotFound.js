import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main>
      <h2>Page Not Found</h2>
      <button type="button" className="btn btn-link">
        <Link to="/">Home</Link>
      </button>
    </main>
  );
};

export default NotFound;
