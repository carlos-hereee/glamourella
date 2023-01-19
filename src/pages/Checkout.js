import { useContext, useEffect, useState } from "react";
import { ServicesContext } from "../utils/context/ServicesContext";
import CartEmpty from "../component/molecules/empty/CartEmpty";
import CartItem from "../component/organisms/CartItem";

const Checkout = () => {
  const { cart } = useContext(ServicesContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      // let cost = cart.reduce((a, b) => a.cost + b.cost);
      // setTotal(cost);
    }
  }, [cart]);
  return (
    <section className="primary-container">
      <h3>Check Out</h3>
      {cart.length > 0 ? (
        <CartItem data={cart} />
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
