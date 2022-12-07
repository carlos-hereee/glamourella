import { useState } from "react";
import { useContext } from "react";
import { CalendarContext } from "../../utils/context/CalendarContext";
import { ServicesContext } from "../../utils/context/ServicesContext";
import CheckoutCard from "../molecules/CheckoutCard";

const BookingEvents = () => {
  const { cart } = useContext(ServicesContext);
  const { events } = useContext(CalendarContext);
  const [error, setError] = useState("");
  const handleClick = (e) => {
    console.log("e", e);
    if (!events.length) {
      setError("Sorry we are all booked up, please come back tomorrow");
    }
  };
  return (
    <div className="booking-events">
      {cart &&
        cart.map((c) => (
          <CheckoutCard data={c} key={c.uid} handleClick={handleClick} />
        ))}
      <span className="required">{error}</span>
    </div>
  );
};

export default BookingEvents;
