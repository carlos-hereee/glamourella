import { Link } from "react-router-dom";
import Buttons from "../component/atoms/Buttons";

const Header = () => {
  return (
    <header>
      <h1>GLAMOURELLA</h1>
      <nav className="navbar">
        <Link className="nav-link" to="/">
          <Buttons name="home" />
        </Link>
        <Link className="nav-link" to="/about-us">
          About Us
        </Link>
        <Link className="nav-link" to="/services">
          Services
        </Link>
        <Link className="nav-link" to="/booking">
          Booking
        </Link>
        <Link className="nav-link" to="/gallery">
          Gallery
        </Link>
        <Link className="nav-link" to="/contact-us">
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
