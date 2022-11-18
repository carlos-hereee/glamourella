import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Buttons from "../component/atoms/Buttons";
import Icons from "../component/atoms/Icons";
import Logo from "../component/atoms/Logo";
import { ServicesContext } from "../utils/context/ServicesContext";

const Header = () => {
  const [active, setActive] = useState(false);
  const navRef = useRef(null);
  const { cart } = useContext(ServicesContext);

  useEffect(() => {
    const onClickOutside = (event) => {
      // click anywhere
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActive(false);
      }
    };
    document.addEventListener("click", onClickOutside, true);
    return () => {
      document.removeEventListener("click", onClickOutside, true);
    };
  }, []);
  const onClick = () => setActive(!active);
  return (
    <header>
      <Logo />
      <nav ref={navRef} className={active ? "navbar-mobile" : "navbar"}>
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
          <Buttons name="Booking" count={cart.length} />
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
      <button className="navbar-burger" onClick={onClick}>
        <Icons name="bars" size="2x" />
      </button>
    </header>
  );
};

export default Header;
