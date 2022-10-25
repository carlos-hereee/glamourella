import { useContext, useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import { CalendarContext } from "../utils/CalendarContext";
import moment from "moment";
import Icons from "../component/atoms/Icons";
import CalendarEvents from "../component/calendar/CalendarEvents";

const formatDate = (d) => moment(d).format("ddd MMM DD YYYY");
const eventMatch = (date, events) => {
  return events.filter((e) => {
    return formatDate(e.start.dateTime) === date;
  });
};
const Booking = () => {
  const [value, onChange] = useState();
  const { events, setDay } = useContext(CalendarContext);

  useEffect(() => {
    if (value) {
      // getCalendarDay(value);
      const day = formatDate(value);
      setDay(eventMatch(day, events));
    }
  }, [value]);
  const tileContent = (date) => {
    const day = formatDate(date);
    const match = eventMatch(day, events);
    if (match.length) {
      return (
        <p className="required">
          <Icons name={match.length} /> Remaining!
        </p>
      );
    }
  };
  return (
    <div className="container">
      <Calendar
        onChange={onChange}
        value={value}
        minDate={new Date()}
        minDetail="month"
        prev2Label={null}
        next2Label={null}
        navigationLabel={({ label }) => (
          <h3>{label.charAt(0).toUpperCase() + label.slice(1)}</h3>
        )}
        showNeighboringMonth={false}
        tileContent={({ date }) => tileContent(date)}
      />
      <CalendarEvents />
    </div>
  );
};

export default Booking;
