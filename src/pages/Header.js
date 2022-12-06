/* eslint-disable react-hooks/exhaustive-deps */
import { useReducer } from "react";
import { useContext, useEffect, useState } from "react";
import BurgerButton from "../component/atoms/BugerButton";
import Logo from "../component/atoms/Logo";
import Navlink from "../component/atoms/Navlink";
import { GalleryContext } from "../utils/context/GalleryContext";
import { GlamourellaContext } from "../utils/context/GlamourellaContext";
import { ServicesContext } from "../utils/context/ServicesContext";
import { reducer } from "../utils/reducers/GlamourellaReducer";

const Header = () => {
  const [active, setActive] = useState(false);
  const [isClose, setClose] = useState(false);
  const [notification, setNotification] = useState(0);
  const { cart } = useContext(ServicesContext);
  const { checkout } = useContext(GalleryContext);
  const { menu } = useContext(GlamourellaContext);
  // eslint-disable-next-line no-unused-vars
  const [_, dispatch] = useReducer(reducer);
  const getIdx = (n) => menu.findIndex((m) => m.name === n);

  useEffect(() => {
    // const startAnimation = () => setClose(false);
    const endAnimation = () => setClose(true);
    // document.addEventListener("animationstart", startAnimation, true);
    document.addEventListener("animationend", endAnimation, { once: true });
    return () => {
      // document.removeEventListener("animationstart", startAnimation, true);
      document.removeEventListener("animationend", endAnimation, {
        once: true,
      });
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
          className="navigation"
          data-state={active ? "open" : isClose ? "closing" : "close"}>
          {menu.map((m) => m.name && <Navlink data={m} key={m.uid} />)}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
