import { Link } from "react-router-dom";
import Buttons from "../component/atoms/Buttons";
import Logo from "../component/atoms/Logo";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <nav className="navbar">
        <Link className="nav-link" to="/">
          <Buttons name="Home" />
        </Link>
        <Link className="nav-link" to="/about-us">
          <Buttons name="About Us" />
        </Link>
        <Link className="nav-link" to="/services">
          <Buttons name="Services" />
        </Link>
        <Link className="nav-link" to="/booking">
          <Buttons name="Booking" />
        </Link>
        <Link className="nav-link" to="/gallery">
          <Buttons name="Gallery" />
        </Link>
        <Link className="nav-link" to="/account">
          <Buttons name="Account" />
        </Link>
        <Link className="nav-link" to="/contact-us">
          <Buttons name="Contact Us" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
