import { useContext } from "react";
import { ServicesContext } from "../../utils/context/ServicesContext";
import CheckoutCard from "../molecules/CheckoutCard";

const BookingEvents = () => {
  const { cart } = useContext(ServicesContext);
  return (
    <div className="booking-events">
      {cart && cart.map((c) => <CheckoutCard data={c} key={c.uid} />)}
    </div>
  );
};

export default BookingEvents;
