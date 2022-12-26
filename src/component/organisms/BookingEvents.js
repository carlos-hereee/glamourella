import { useState } from "react";
import { useContext } from "react";
import { CalendarContext } from "../../utils/context/CalendarContext";
import { ServicesContext } from "../../utils/context/ServicesContext";
import CardRow from "./CardRow";

const BookingEvents = ({ data }) => {
  const { events } = useContext(CalendarContext);
  const { removeFromCart } = useContext(ServicesContext);
  const [error, setError] = useState("");
  const handleClick = (d, isCancel) => {
    if (isCancel) {
      removeFromCart(d);
    } else {
      console.log("isCancel", isCancel);
    }
    if (!events.length) {
      setError("Sorry we are all booked up, please come back tomorrow");
    } else setError("");
  };
  return (
    <div className="booking-events">
      <h3 className="title">Booking Events</h3>
      {data.map((c) => (
        <CardRow data={c} key={c.uid} handleClick={handleClick} />
      ))}
      <span className="required">{error}</span>
    </div>
  );
};

export default BookingEvents;
