/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef, useState } from "react";
import shortid from "shortid";
import Buttons from "../component/atoms/Buttons";
import Logo from "../component/atoms/Logo";
import Navlink from "../component/atoms/Navlink";
import { GalleryContext } from "../utils/context/GalleryContext";
import { ServicesContext } from "../utils/context/ServicesContext";

const Header = () => {
  const [active, setActive] = useState(false);
  const [notification, setNotification] = useState(0);
  const navRef = useRef(null);
  const { cart } = useContext(ServicesContext);
  const { checkout } = useContext(GalleryContext);
  const [menu, setMenu] = useState([
    { name: "home", uid: shortid.generate() },
    { name: "about-us", uid: shortid.generate() },
    { name: "services", uid: shortid.generate() },
    { name: "booking", uid: shortid.generate() },
    { name: "gallery", uid: shortid.generate() },
    { name: "check-out", uid: shortid.generate() },
    { name: "account", uid: shortid.generate() },
  ]);

  const getIdx = (n) => menu.findIndex((m) => m.name === n);
  useEffect(() => {
    const onClickOutside = () => setActive(false);
    document.addEventListener("click", onClickOutside, true);
    return () => {
      document.removeEventListener("click", onClickOutside, true);
    };
  }, []);
  useEffect(() => {
    if (cart.length) {
      let newArr = [...menu];
      let count = checkout.length || 0;
      count += cart.length;
      // find index of booking
      const idx = getIdx("booking");
      newArr[idx].notification = cart.length;
      setMenu(newArr);
      setNotification(count);
    }
    if (checkout.length) {
      let count = cart.length || 0;
      count += checkout.length;
      let newArr = [...menu];
      const idx = getIdx("check-out");
      newArr[idx].notification = checkout.length;
      setMenu(newArr);
      setNotification(count);
    }
  }, [cart, checkout]);
  const handleClick = () => setActive(!active);

  return (
    <header>
      <Logo />
      <nav ref={navRef} className={active ? "navbar-mobile" : "navbar"}>
        {menu.map((m) => (
          <Navlink data={m} key={m.uid} />
        ))}
      </nav>
      <Buttons
        name="burger"
        handleClick={handleClick}
        notification={notification > 0 && notification}
        size="2x"
      />
    </header>
  );
};

export default Header;
