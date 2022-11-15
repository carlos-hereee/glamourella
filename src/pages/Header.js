import { useState } from "react";
import { Link } from "react-router-dom";
import Buttons from "../component/atoms/Buttons";
import Icons from "../component/atoms/Icons";
import Logo from "../component/atoms/Logo";

const Header = () => {
  const [active, setActive] = useState(false);
  if (active) {
    document.addEventListener(
      "click",
      (event) => {
        if (event.target.closest(".navbar-mobile")) return;
        setActive(false);
      },
      true
    );
  }
  return (
    <header className="header">
      <Logo />
      <nav className={active ? "navbar-mobile" : "navbar"}>
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
      <button className="navbar-burger btn" onClick={() => setActive(!active)}>
        <Icons name="bars" size="2x" />
      </button>
    </header>
  );
};

export default Header;
