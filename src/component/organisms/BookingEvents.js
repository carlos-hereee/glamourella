import { useState } from "react";
import { useContext } from "react";
import { CalendarContext } from "../../utils/context/CalendarContext";
import CheckoutCard from "./CheckoutCard";

const BookingEvents = ({ data }) => {
  const { events } = useContext(CalendarContext);
  const [error, setError] = useState("");
  const handleClick = (e) => {
    if (!events.length) {
      setError("Sorry we are all booked up, please come back tomorrow");
    }
  };
  return (
    <div className="booking-events">
      {data.map((c) => (
        <CheckoutCard data={c} key={c.uid} handleClick={handleClick} />
      ))}
      <span className="required">{error}</span>
    </div>
  );
};

export default BookingEvents;
