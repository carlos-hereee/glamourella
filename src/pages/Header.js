/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef, useState } from "react";
import shortid from "shortid";
import Icons from "../component/atoms/Icons";
import Logo from "../component/atoms/Logo";
import Navlink from "../component/atoms/Navlink";
import { ServicesContext } from "../utils/context/ServicesContext";

const Header = () => {
  const [active, setActive] = useState(false);
  const navRef = useRef(null);
  const { cart } = useContext(ServicesContext);
  const [menu, setMenu] = useState([
    { name: "home", uid: shortid.generate() },
    { name: "about-us", uid: shortid.generate() },
    { name: "services", uid: shortid.generate() },
    { name: "booking", uid: shortid.generate() },
    { name: "gallery", uid: shortid.generate() },
    { name: "account", uid: shortid.generate() },
  ]);

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
  useEffect(() => {
    if (cart.length) {
      let newArr = [...menu];
      // find index of booking
      const idx = menu.findIndex((m) => m.name === "booking");
      newArr[idx].notification = cart.length;
      setMenu(newArr);
    }
  }, [cart]);
  const onClick = () => setActive(!active);

  return (
    <header>
      <Logo />
      <nav ref={navRef} className={active ? "navbar-mobile" : "navbar"}>
        {menu.map((m) => (
          <Navlink data={m} key={m.uid} />
        ))}
        {/* <Link className="nav-link" to="/about-us">
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
        </Link> */}
      </nav>
      <button className="navbar-burger" onClick={onClick}>
        <Icons name="bars" size="2x" />
      </button>
    </header>
  );
};

export default Header;
