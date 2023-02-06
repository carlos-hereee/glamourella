import { useContext, useEffect, useState } from "react";
import { ServicesContext } from "../../utils/context/ServicesContext";
import ShippingRequired from "../molecules/ShippingRequired";
import Total from "../molecules/Total";
import PaymentOptions from "../molecules/PaymentOptions";
import { scrollToCartItem } from "../../utils/functions/calendar";

const PaymentMethods = ({ click }) => {
  const { cart, bookingRequired } = useContext(ServicesContext);
  const [total, setTotal] = useState(0);
  const [shippingRequired, setShippingReq] = useState(false);

  useEffect(() => {
    if (cart.length > 0) {
      let cost = 0;
      cart.filter((c) => {
        if (c.isAccessory) {
          setShippingReq(true);
        }
        cost += c.cost * c.count;
        return c;
      });
      setTotal(cost);
    }
  }, [cart]);

  const handleClick = () => {
    const isBookingRequired = cart.filter((c) => c.isBookable && !c.isBooked);
    if (isBookingRequired.length > 0) {
      click(false);
      isBookingRequired.forEach((br) => {
        const idx = cart.findIndex((c) => c.uid === br.uid);
        if (idx !== -1) {
          bookingRequired(idx, br);
        }
      });
      // scroll to first instance
      scrollToCartItem(isBookingRequired[0]);
    } else click(true);
  };
  return (
    <div className="card-footer">
      <Total total={total} />
      <PaymentOptions />
      <button type="button" className="btn btn-classic" onClick={handleClick}>
        Verify Information
      </button>
      {shippingRequired && <ShippingRequired />}
    </div>
  );
};

export default PaymentMethods;
