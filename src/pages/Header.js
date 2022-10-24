import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About Us</Link>
      <Link to="/services">Services</Link>
      <Link to="/booking">Booking</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/contact-us">Contact Us</Link>
    </header>
  );
};

export default Header;
