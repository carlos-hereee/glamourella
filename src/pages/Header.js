/* eslint-disable react-hooks/exhaustive-deps */
import { useReducer } from "react";
import { useRef } from "react";
import { useContext, useEffect, useState } from "react";
import BurgerButton from "../component/organisms/BugerButton";
import Logo from "../component/atoms/Logo";
import Navlink from "../component/molecules/Navlink";
import { GalleryContext } from "../utils/context/GalleryContext";
import { GlamourellaContext } from "../utils/context/GlamourellaContext";
import { ServicesContext } from "../utils/context/ServicesContext";
import { reducer } from "../utils/reducers/GlamourellaReducer";

const Header = () => {
  const [active, setActive] = useState(false);
  const [isClose, setClose] = useState(false);
  const [notification, setNotification] = useState(0);
  const navRef = useRef(null);
  const { cart } = useContext(ServicesContext);
  const { checkout } = useContext(GalleryContext);
  const { menu } = useContext(GlamourellaContext);

  // eslint-disable-next-line no-unused-vars
  const [_, dispatch] = useReducer(reducer);
  const getIdx = (n) => menu.findIndex((m) => m.name === n);
  useEffect(() => {
    const endAnimation = () => setClose(true);
    // TODO: close navigation is clicks outside container
    // const onClick = (event) => {
    //   // console.log("navRef.current", navRef.current);
    //   if (navRef.current && !navRef.current.contains(event.target)) {
    //     setClose(true);
    //   }
    // };
    document.addEventListener("animationend", endAnimation, true);
    // document.addEventListener("mousedown", onClick, true);
    return () => {
      document.removeEventListener("animationend", endAnimation, true);
      // document.removeEventListener("mousedown", onClick, true);
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
      dispatch({ type: "UPDATE_MENU", payload: newArr });
      setNotification(count);
    }
    if (checkout.length) {
      let count = cart.length || 0;
      count += checkout.length;
      let newArr = [...menu];
      const idx = getIdx("check-out");
      newArr[idx].notification = checkout.length;
      dispatch({ type: "UPDATE_MENU", payload: newArr });
      setNotification(count);
    }
  }, [cart, checkout]);
  const handleClick = () => setActive(!active);

  return (
    <header>
      <Logo />
      <nav className="primary-navigation">
        <BurgerButton
          data={{ name: active ? "x" : "burger", notification }}
          handleClick={handleClick}
        />
        <ul
          ref={navRef}
          className="navigation"
          data-state={active ? "open" : isClose ? "closing" : "close"}>
          {menu.map((m) => (
            <Navlink data={m} key={m.uid} handleClick={handleClick} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
