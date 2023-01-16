import { useState } from "react";
import { useContext } from "react";
import { CalendarContext } from "../../utils/context/CalendarContext";
import { ServicesContext } from "../../utils/context/ServicesContext";
import { formatMilli } from "../../utils/moment";
import CancelRow from "../molecules/card/CancelRow";
import CardRow from "./CardRow";

const BookingEvents = ({ data }) => {
  const { events, setDay, setAppointment } = useContext(CalendarContext);
  const { removeFromCart, setActive, active } = useContext(ServicesContext);
  const [cancel, setCancel] = useState({});
  // const [error, setError] = useState("");

  const cancelReq = (e, isConfirm) => {
    if (isConfirm) {
      removeFromCart(e);
      e.uid === active.uid && setActive({});
    } else setCancel({});
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
      active.uid === d.uid && setActive({});
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
      setActive(d);
      // set Date
      setDay(minDate);
      // set earliest appointment
      setEarliestApp(minDate);
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };
  return (
    <div className="booking-events">
      {data.map((c) =>
        cancel.uid === c.uid ? (
          <CancelRow data={c} key={c.uid} click={cancelReq} />
        ) : (
          <CardRow data={c} key={c.uid} click={handleClick} active={active} />
        )
      )}
      {/* <span className="required">{error}</span> */}
    </div>
  );
};

export default BookingEvents;
