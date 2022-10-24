import { Link } from "react-router-dom";
import Buttons from "../component/atoms/Buttons";

const Header = () => {
  return (
    <header className="header">
      <h1>GLAMOURELLA</h1>
      <nav className="navbar">
        <Link className="nav-link" to="/">
          <Buttons name="home" />
        </Link>
        <Link className="nav-link" to="/about-us">
          <Buttons name="about us" />
        </Link>
        <Link className="nav-link" to="/services">
          <Buttons name="services" />
        </Link>
        <Link className="nav-link" to="/booking">
          <Buttons name="booking" />
        </Link>
        <Link className="nav-link" to="/gallery">
          <Buttons name="gallery" />
        </Link>
        <Link className="nav-link" to="/contact-us">
          <Buttons name="contact us" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
