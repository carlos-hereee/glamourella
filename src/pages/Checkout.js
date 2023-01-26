import { useContext, useEffect, useState } from "react";
import { ServicesContext } from "../utils/context/ServicesContext";
import CartEmpty from "../component/molecules/empty/CartEmpty";
import CartItem from "../component/organisms/CartItem";
import CustomLink from "../component/atoms/CustomLink";
import { scrollToCartItem } from "../utils/functions/calendar";
import PaymentMethods from "../component/organisms/PaymentMethods";
import ButtonLinkNavigation from "../component/molecules/buttons/ButtonLinkNavigation";
import CardHeader from "../component/molecules/card/CardHeader";
import { AppContext } from "../utils/context/AppContext";

const Checkout = () => {
  const { cart, bookingRequired } = useContext(ServicesContext);
  const { checkout } = useContext(AppContext);
  const [proceedWithCheckout, setProceedWithCheckout] = useState(false);

  const handleClick = () => {
    const isBookingRequired = cart.filter((c) => c.isBookable && !c.isBooked);
    if (isBookingRequired.length > 0) {
      setProceedWithCheckout(false);
      isBookingRequired.forEach((br) => {
        const idx = cart.findIndex((c) => c.uid === br.uid);
        if (idx !== -1) {
          bookingRequired(idx, br);
        }
      });
      // scroll to first instance
      scrollToCartItem(isBookingRequired[0]);
    } else setProceedWithCheckout(true);
  };
  return (
    <section className="secondary-container">
      <CardHeader data={checkout} />
      <ButtonLinkNavigation links={["services", "accessories"]} />
      {cart.length > 0 && (
        <div className="card-body">
          <CartItem data={cart} link="booking" />
        </div>
      )}
      {proceedWithCheckout ? (
        <PaymentMethods />
      ) : (
        <button type="button" className="btn btn-classic" onClick={handleClick}>
          Proceed With Checkout
        </button>
      )}
    </section>
  );
};

export default Checkout;
