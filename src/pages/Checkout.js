import { useContext, useEffect, useState } from "react";
import CardRow from "../component/organisms/CardRow";
import { ServicesContext } from "../utils/context/ServicesContext";
import CartEmpty from "../component/molecules/empty/CartEmpty";

const Checkout = () => {
  const { cart } = useContext(ServicesContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      let count = 0;
      cart && cart.forEach((c) => c.cost && (count += c.cost));
      setTotal(count);
    }
  }, [cart]);
  return (
    <section className="primary-container">
      <h3>Check Out</h3>
      {cart.length > 0 ? (
        cart.map((c) => <CardRow key={c.uid} data={c} />)
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
