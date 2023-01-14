import { useState } from "react";
import { useContext } from "react";
import { CalendarContext } from "../../utils/context/CalendarContext";
import { ServicesContext } from "../../utils/context/ServicesContext";
import CancelRow from "../molecules/card/CancelRow";
import CardRow from "./CardRow";

const BookingEvents = ({ data }) => {
  const { events } = useContext(CalendarContext);
  const { removeFromCart } = useContext(ServicesContext);
  const [cancel, setCancel] = useState({});
  const [error, setError] = useState("");
  const cancelReq = (e, isConfirm) => {
    isConfirm ? removeFromCart(e) : setCancel({});
  };
  const handleClick = (d, isCancel) => {
    if (isCancel) {
      // removeFromCart(d);
      // cancelReq(d);
      setCancel(d);
    } else {
      // find next open appointment
      console.log("isCancel", isCancel);
    }
    if (!events.length) {
      setError("Sorry we are all booked up, please come back tomorrow");
    } else setError("");
  };
  return (
    <div className="booking-events">
      <h3 className="title">Booking Events</h3>
      {/* {} */}

      {data.map((c) =>
        cancel.uid === c.uid ? (
          <CancelRow data={c} key={c.uid} click={cancelReq} />
        ) : (
          <CardRow data={c} key={c.uid} click={handleClick} />
        )
      )}
      <span className="required">{error}</span>
    </div>
  );
};

export default BookingEvents;
