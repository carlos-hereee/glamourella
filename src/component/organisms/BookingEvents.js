import { useState } from "react";
import { useContext } from "react";
import { CalendarContext } from "../../utils/context/CalendarContext";
import { ServicesContext } from "../../utils/context/ServicesContext";
import { formatMilli, getMeetingList } from "../../utils/functions/moment";
import CancelRow from "../molecules/card/CancelRow";
import CardRow from "./CardRow";

const BookingEvents = ({ data }) => {
  const { events, setDay } = useContext(CalendarContext);
  const { removeFromCart, setActive, active } = useContext(ServicesContext);
  const [cancel, setCancel] = useState({});

  const cancelReq = (e, isConfirm) => {
    if (isConfirm) {
      removeFromCart(e);
      e.uid === active.uid && setActive({});
    } else setCancel({});
  };

  const handleClick = (d, isCancel) => {
    if (isCancel) {
      setCancel(d);
    } else {
      // find open meeting
      const list = getMeetingList(events.sections);
      const minDate = list.reduce((a, b) => {
        return formatMilli(a.title) < formatMilli(b.title) ? a : b;
      });
      // set Date
      setActive(d);
      setDay(minDate);
      // // set earliest meeting day
      // setEarliestApp(minDate);
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
    </div>
  );
};

export default BookingEvents;
