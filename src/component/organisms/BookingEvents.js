import { useState } from "react";
import { useContext } from "react";
import { CalendarContext } from "../../utils/context/CalendarContext";
import { ServicesContext } from "../../utils/context/ServicesContext";
import { formatMilli } from "../../utils/moment";
import CancelRow from "../molecules/card/CancelRow";
import CardRow from "./CardRow";

const BookingEvents = ({ data }) => {
  const { events, setDay, setAppointment } = useContext(CalendarContext);
  const { removeFromCart } = useContext(ServicesContext);
  const [cancel, setCancel] = useState({});
  const [error, setError] = useState("");
  const cancelReq = (e, isConfirm) => {
    isConfirm ? removeFromCart(e) : setCancel({});
  };
  const setEarliestApp = (date) => {
    const min = date.list.reduce((a, b) => {
      return a.isOpen && a.time.startTime > b.time.startTime ? a : b;
    });
    setAppointment(min);
  };
  const handleClick = (d, isCancel) => {
    if (isCancel) {
      setCancel(d);
    } else {
      // find next open appointment
      const element = document.getElementById("calendar-events");
      const today = formatMilli(new Date());
      let filtered = [];
      events.sections.filter((e) => {
        if (e.hasList && formatMilli(e.title) >= today) {
          const hasList = e.list.filter((l) => l.isOpen);
          filtered.push(e);
          filtered[filtered.length - 1].list = hasList;
        }
        return e;
      });
      const minDate = filtered.reduce((a, b) => {
        return formatMilli(a.title) < formatMilli(b.title) ? a : b;
      });
      // set Date
      setDay(minDate);
      // set earliest appointment
      setEarliestApp(minDate);
      element.scrollIntoView({ block: "center", behavior: "smooth" });
    }
    if (!events.length) {
      setError("Sorry we are all booked up, please come back tomorrow");
    } else setError("");
  };
  return (
    <div className="booking-events">
      <h3 className="title">Booking Events</h3>
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
