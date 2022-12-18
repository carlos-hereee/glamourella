/* eslint-disable react-hooks/exhaustive-deps */
import { useReducer } from "react";
import { useContext, useEffect, useState } from "react";
import BurgerButton from "../component/molecules/BugerButton";
import Logo from "../component/atoms/Logo";
import Navlink from "../component/molecules/Navlink";
import { GlamourellaContext } from "../utils/context/GlamourellaContext";
import { ServicesContext } from "../utils/context/ServicesContext";
import { reducer } from "../utils/reducers/GlamourellaReducer";
// import { UserContext } from "../utils/context/UserContext";

const Header = () => {
  const [isActive, setActive] = useState(false);
  const [isClose, setClose] = useState(false);
  const { cart } = useContext(ServicesContext);
  // const { user } = useContext(UserContext);
  const { menu, updateBurger } = useContext(GlamourellaContext);

  // eslint-disable-next-line no-unused-vars
  const [_, dispatch] = useReducer(reducer);
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
    // console.log("cart.length", cart.length);
    let menuPayload = [...menu];
    const bookingIdx = menuPayload.findIndex((i) => i.name === "booking");
    menuPayload[bookingIdx].notification = cart.length;
    const burgerPayload = {
      name: isActive ? "x" : "burger",
      notification: cart.length,
    };
    dispatch({ type: "UPDATE_MENU", payload: menuPayload });
    updateBurger(burgerPayload);
    // if ()
    // if (user.isAdmin) {
    //   <Navigate to="/admin-dashboard" replace />;
    // }
  }, [cart, isActive]);
  const handleClick = () => {
    setActive(!isActive);
  };
  // useEffect(() => {}, []);

  return (
    <header>
      <Logo />
      <nav className="primary-navigation">
        <BurgerButton isBurger={isActive} handleClick={handleClick} />
        <ul
          className="navigation"
          data-state={isActive ? "open" : isClose ? "closing" : "close"}>
          {menu.map((m) => (
            <Navlink data={m} key={m.uid} handleClick={handleClick} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
