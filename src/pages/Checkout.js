import { useContext, useEffect, useState } from "react";
import { ServicesContext } from "../utils/context/ServicesContext";
import CartEmpty from "../component/molecules/empty/CartEmpty";
import CartItem from "../component/organisms/CartItem";
import CustomLink from "../component/atoms/CustomLink";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart } = useContext(ServicesContext);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length > 0) {
      let cost = cart.reduce((a, b) => {
        return a + b.cost;
      }, 0);
      setTotal(cost);
    }
  }, [cart]);

  const handleClick = () => {
    navigate("/booking");
  };

  return (
    <section className="secondary-container">
      <h3>Check Out</h3>
      {cart.length > 0 ? (
        <>
          <CustomLink link="services" />
          <CustomLink link="accessories" />
          <CartItem data={cart} click={handleClick} link="booking" />
        </>
      ) : (
        <>
          <CartEmpty link="services" />
          <CartEmpty link="accessories" />
        </>
      )}
      <h4>Total ${total}</h4>
      <button type="button" className="btn btn-classic">
        Pay now
      </button>
    </section>
  );
};

export default Checkout;
