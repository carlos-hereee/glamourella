import { useContext, useEffect, useState } from "react";
import { ServicesContext } from "../utils/context/ServicesContext";
import CartEmpty from "../component/molecules/empty/CartEmpty";
import CartItem from "../component/organisms/CartItem";
import CustomLink from "../component/atoms/CustomLink";
import { scrollToCartItem } from "../utils/functions/calendar";

const Checkout = () => {
  const { cart, bookingRequired } = useContext(ServicesContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      let cost = cart.reduce((a, b) => {
        return a + b.cost;
      }, 0);
      setTotal(cost);
    }
  }, [cart]);

  const handleClick = () => {
    const isBookingRequired = cart.filter((c) => c.isBookable && !c.isBooked);
    if (isBookingRequired.length > 0) {
      isBookingRequired.forEach((br) => {
        const idx = cart.findIndex((c) => c.uid === br.uid);
        if (idx !== -1) {
          bookingRequired(idx, br);
        }
      });
      // scroll to first instance
      scrollToCartItem(isBookingRequired[0]);
    }
  };
  return (
    <section className="secondary-container">
      <h3>Check Out</h3>
      {cart.length > 0 ? (
        <>
          <CustomLink link="services" />
          <CustomLink link="accessories" />
          <CartItem data={cart} link="booking" />
        </>
      ) : (
        <>
          <CartEmpty link="services" />
          <CartEmpty link="accessories" />
        </>
      )}
      <h4>Total ${total}</h4>
      <button type="button" className="btn btn-classic" onClick={handleClick}>
        Pay now
      </button>
    </section>
  );
};

export default Checkout;
